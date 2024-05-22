<template>
  <div class="p-[3em]">
    <p v-if="uploadedSuccessfully">File uploaded successfully!</p>
    <p v-else-if="uploadProgress !== null">Uploading... {{ uploadProgress }}%</p>
    <input type="file" accept="application/pdf" @change="uploadPdf" />
    <p>Uploading file: {{ pdfFile }}</p>
    <progress :value="uploadProgress" max="100"></progress>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../utils/supabaseClient.js'

export default {
  setup() {
    const pdfFile = ref(null)
    const uploadProgress = ref(null)
    const uploadedSuccessfully = ref(false)

    const uploadPdf = async (event) => {
      const fileInput = event.target
      const file = fileInput.files?.[0]

      if (file) {
        uploadedSuccessfully.value = false
        uploadProgress.value = 0

        // Generate a unique filename
        const uniqueFileName = `${Date.now()}_${file.name.substring(0, 5)}`

        try {
          const { data, error } = await supabase.storage
            .from('bridgePitchDecks')
            .upload(uniqueFileName, file, {
              contentType: 'application/pdf',
              upsert: true,
              progress: (progressEvent) => {
                const percentComplete = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
                )
                console.log(`Upload progress: ${percentComplete}%`)

                // Update your progress bar or UI component with 'percentComplete' value here
                if (uploadProgress.value) {
                  // Assuming 'uploadProgress' is a state variable or reference
                  uploadProgress.value = percentComplete
                }
              }
            })

          if (error) {
            console.error(error)
          } else {
            pdfFile.value = data?.path || null
            uploadedSuccessfully.value = true
          }
        } catch (error) {
          console.error(error)
        }
      }
    }

    return { pdfFile, uploadPdf, uploadProgress, uploadedSuccessfully }
  }
}
</script>
