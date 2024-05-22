<template>
  <FormArch step="1" title="General Information">
    {{ data }}
    <VForm
      v-slot="{ meta: formMeta }"
      @submit="nextStep"
      novalidate
      :validation-schema="generalInformationSchema"
      class="flex flex-col gap-6 w-[90vw] mx-auto lg:w-full"
    >
      <div class="flex flex-col gap-3 lg:grid lg:grid-cols-2 w-full md:gap-6">
        <InputBox rows="2" id="name" label="What is your name?" vmodelName="name" />

        <InputBox
          rows="2"
          id="projectName"
          label="What is your project name?"
          vmodelName="projectName"
        />
      </div>

      <InputBox
        rows="2"
        id="companyEmail"
        label="What is your company's email address?"
        vmodelName="companyEmail"
      />

      <InputBox
        rows="3"
        id="description"
        label="Give us a small description of your project"
        vmodelName="description"
      />

      <h1 class="font-['Gsemibold'] text-[1.125em]">Team</h1>

      <InputBox
        rows="3"
        id="foundersNames"
        label="Give the founders names{separate using a comma}"
        vmodelName="foundersNames"
      />

      <InputBox
        rows="3"
        id="founderBackgrounds"
        label="Founders backgrounds linked in profiles{separate using a comma}"
        vmodelName="founderBackgrounds"
      />

      <InputBox
        rows="3"
        id="expBlockchain"
        label="Relevant experience in blockchain / cryptocurrency{separate using a comma}"
        vmodelName="expBlockchain"
      />

      <InputBox
        rows="3"
        id="teamProfiles"
        label="Team Linked in profiles {separate using a comma}"
        vmodelName="teamProfiles"
      />

      <!-- Action:group -->
      <div class="actionBtns relative">
        <!-- <a class="bg-transparent items-center absolute right-0 top-2 p-[1em] flex flex-row text-accent-400 font-['Csemibold'] text-[1.25em] gap-2 " href="/TechProduct">Next Step <IconArrow/> </a> -->
        <button
          type="submit"
          class="bg-transparent cursor-pointer items-center absolute right-0 top-2 p-[1em] flex flex-row text-accent-400 font-['Csemibold'] text-[1.25em] gap-2"
        >
          Next Step <IconArrow />
        </button>
      </div>
    </VForm>
  </FormArch>
</template>

<script setup lang="ts">
import FormArch from './FormArch.vue'
import IconArrow from './IconArrow.vue'
import InputBox from './InputBox.vue'
import { Form as VForm } from 'vee-validate'
import { supabase } from '../utils/supabaseClient'
// import { type FormMeta } from "vee-validate";
import * as Yup from 'yup'

interface GeneralInformation {
  name: String
  projectName: String
  companyEmail: String
  description: String
  foundersNames: String
  founderBackgrounds: String
  expBlockchain: String
  teamProfiles: String
}

const generalInformationSchema = Yup.object().shape({
  name: Yup.string().required(),
  projectName: Yup.string().min(8, 'values must exceed 8').required(),
  companyEmail: Yup.string().email().min(8, 'values must exceed 8').required(),
  description: Yup.string().min(8, 'values must exceed 8').required(),
  foundersNames: Yup.string().min(8, 'values must exceed 8').required(),
  founderBackgrounds: Yup.string().min(8, 'values must exceed 8').required(),
  expBlockchain: Yup.string().min(8, 'values must exceed 8').required(),
  teamProfiles: Yup.string().min(8, 'values must exceed 8').required()
})

import { ref } from 'vue'

const data = ref()

import { useRouter } from 'vue-router'

const router = useRouter()

const nextStep = async (values: any) => {
  values = values as GeneralInformation

  console.log(values)
  data.value = await supabase.from('GeneralInformation').select()

  alert('clicked')
  // router.push()
  // router.push("/TechProduct")
}
</script>

<style scoped></style>
