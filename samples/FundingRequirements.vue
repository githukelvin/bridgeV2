<template>
  <FormArch step="5" title="Funding Requirements">
    <!-- v-slot="{ meta: formMeta }"  -->
    {{ data }}
    <VForm
      class="flex flex-col gap-6 w-[90vw] mx-auto lg:w-full"
      :validationSchema="fundingSchema"
      novalidate
      @submit.prevent="finishSubmit"
    >
      <div class="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-6">
        <InputBox rows="2" id="amount" label="Amount of funding sought" vmodelName="amount" />
        <InputBox
          rows="2"
          id="roundType"
          label="Funding round type (Seed, Series A, etc)"
          vmodelName="roundType"
        />
      </div>
      <div class="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-6">
        <InputBox
          rows="2"
          id="valuationExpectation"
          label="Valuation Expectation"
          vmodelName="valuationExpectation"
        />

        <InputBox rows="2" id="timeline" label="Timeline for fundraising" vmodelName="timeline" />
      </div>
      <InputBox rows="3" id="useOfFunds" label="Intended use of funds" vmodelName="useOfFunds" />
      <InputBox
        rows="3"
        id="commitments"
        label="Current commitments or interest from other investors"
        vmodelName="commitments"
      />
      <!-- Action:group -->
      <div class="actionBtns flex flex-col gap-8 lg:flex-row justify-between items-center">
        <!-- <button
          class="bg-accent-500 items-center rounded-sm cursor-pointer right-0 top-2 py-3 px-[1em] flex flex-row text-primary-400 font-['Csemibold'] text-[1.25em] gap-2"
        >
          Upload Pitch Deck
        </button> -->
        <div class="flex flex-col gap-1">
          <label
            class="block mb-2 text-xl font-['Cmedium'] text-primary-500 dark:text-primary-500"
            for="file_input"
            >Upload Pitch Deck</label
          >
          <input
            class="block w-full text-xl text-accent-500 border file:cursor-pointer file:bg-primary-300 file:py-2 file:text-accent-400 file:outline-0 file:border-0 border-primary-500 rounded-lg cursor-pointer bg-primary-500 dark:text-accent-500 focus:outline-none dark:bg-primary-500 dark:border-primary-500 dark:placeholder-primary-400"
            id="file_input"
            type="file"
            accept="application/pdf"
          />
        </div>

        <button
          type="submit"
          class="bg-primary-500 rounded-sm items-center right-0 top-2 px-[1em] py-3 flex flex-row text-accent-500 font-['Csemibold'] text-[1.25em] gap-2"
        >
          Finish & Submit
        </button>
      </div>
    </VForm>
  </FormArch>
</template>

<script setup lang="ts">
import { Form as VForm } from 'vee-validate'
import FormArch from './FormArch.vue'
import InputBox from './InputBox.vue'
import { supabase } from '../utils/supabaseClient'
import { ref } from 'vue'
const data = ref()
import * as Yup from 'yup'

interface Fund {
  amount: String
  roundType: String
  valuationExpectation: String
  timeline: String
  useOfFunds: String
  commitments: String
}

const fundingSchema = Yup.object().shape({
  amount: Yup.number().required(),
  roundType: Yup.string().required(),
  valuationExpectation: Yup.string().required(),
  timeline: Yup.string().required(),
  useOfFunds: Yup.string().required(),
  commitments: Yup.string().required()
})

const finishSubmit = async (values: any) => {
  values = values as Fund
  data.value = await supabase.from('Funding').select()

  alert('clicked')
}
</script>
