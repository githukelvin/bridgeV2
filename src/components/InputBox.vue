<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-3 w-full">
      <label
        class="font-['Cregular'] md:text-[1.125em] lg:text-[1.25em] text-base text-shade-200"
        :for="id"
        >{{ label }}</label
      >
      <VField v-slot="{ field }" :name="vmodelName">
        <textarea
          class="bg-white rounded-xl text-shade-200 font-['Cmedium'] py-2 text-xl px-3"
          v-bind="field"
          :id="id"
          name=""
          cols="10"
          :rows="rows"
        ></textarea>
      </VField>
    </div>
    <div class="fv-plugins-message-container">
      <div class="fv-help-block text-error-300 capitalize text-sm font-['Gmedium']">
        <VErrorMessage :name="vmodelName" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field as VField, ErrorMessage as VErrorMessage } from 'vee-validate'
defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  rows: {
    type: String,
    required: true
  },
  vmodelName: {
    type: String,
    required: true
  }
})
// defineModel({

// })
</script>

<style scoped></style>
