<template>
  <div class="lg:w-[70vw] mx-auto">
    <FormArch step="4" title="Token Slaes (if applicable)">
      {{ data }}

      <VForm
        novalidate
        :validationSchema="tokenSchema"
        @submit="nextStep"
        class="flex flex-col gap-6 w-[90vw] mx-auto lg:w-full"
      >
        <InputBox
          rows="3"
          id="tokenSale"
          label="How are you planning the token sale?"
          vmodelName="tokenSale"
        />
        <InputBox
          rows="3"
          id="saleTarget"
          label="What is your token sale target?"
          vmodelName="saleTarget"
        />

        <InputBox
          rows="3"
          id="lockUpPeriods"
          label="What are your token lockup periods?"
          vmodelName="lockUpPeriods"
        />
        <InputBox
          rows="3"
          id="vestingSchedules"
          label="What are your vesting schedules?"
          vmodelName="vestingSchedules"
        />

        <InputBox
          rows="3"
          id="previousInvestors"
          label="Previous investors (if any)"
          vmodelName="previousInvestors"
        />
        <InputBox
          rows="3"
          id="strategicPartnership"
          label="Strategic partnerships (if any)"
          vmodelName="strategicPartnership"
        />
        <InputBox
          rows="3"
          id="testimonials"
          label="Testimonials (if any)"
          vmodelName="testimonials"
        />
        <!-- Action:group -->
        <div class="actionBtns relative">
          <button
            class="bg-transparent items-center absolute right-0 top-2 p-[1em] flex flex-row text-accent-400 font-['Csemibold'] text-[1.25em] gap-2"
          >
            Next Step <IconArrow />
          </button>
        </div>
      </VForm>
    </FormArch>
  </div>
</template>

<script setup lang="ts">
import FormArch from '@/components/FormArch.vue'
import IconArrow from '@/components/IconArrow.vue'
// import InputBox from '@/components/InputBox.vue'
import { Form as VForm } from 'vee-validate'
// import { supabase } from '@/utils/supabaseUtils.js'
import { ref } from 'vue'
const data = ref()
import * as Yup from 'yup'

interface Token {
  tokenSale: String
  saleTarget: String
  lockUpPeriods: String
  vestingSchedules: String
  previousInvestors: String
  strategicPartnership: String
  testimonials: String
}

const tokenSchema = Yup.object().shape({
  tokenSale: Yup.string().required(),
  saleTarget: Yup.string().required(),
  lockUpPeriods: Yup.string().required(),
  vestingSchedules: Yup.string().required(),
  previousInvestors: Yup.string().required(),
  strategicPartnership: Yup.string().required(),
  testimonials: Yup.string().required()
})

const nextStep = async (values: any) => {
  values = values as Token
  console.log(values)
  // data.value = await supabase.from('Token').select()

  alert('clicked')
}
</script>
