<template>
  <FormHeader />
  <div class="lg:w-[70vw] mx-auto">
    <FormArch step="3" title="Business Model">
      <VForm
        :validation-schema="businessModelSchema"
        novalidate
        @submit="nextStep"
        class="flex flex-col gap-6 w-[90vw] mx-auto lg:w-full"
      >
        <InputBox
          rows="3"
          id="revenueModel"
          label="What is your current revenue model?"
          vmodelName="revenueModel"
        />
        <InputBox
          rows="3"
          id="tokenomicsAllocation"
          label="Share more details about your tokenomics allocation (if applicable)"
          vmodelName="tokenomicsAllocation"
        />

        <h1 class="font-['Gsemibold'] text-[1.125em]">Regulatory Compliance</h1>
        <InputBox
          rows="3"
          id="country"
          label="Which country are you currently in or planning to be incorporated in?"
          vmodelName="country"
        />
        <h1 class="font-['Gsemibold'] text-[1.125em]">Financials</h1>
        <InputBox
          rows="3"
          id="previousAmountRaised"
          label="Tell us more about your funding history (previous rounds, amount raised)"
          vmodelName="previousAmountRaised"
        />
        <InputBox
          rows="3"
          id="financial"
          label="Share more information about your future financial projections"
          vmodelName="financial"
        />

        <InputBox
          rows="3"
          id="recurringRevenue"
          label="What is your current monthly recurring revenue?"
          vmodelName="recurringRevenue"
        />
        <InputBox
          rows="3"
          id="usage"
          label="How will the investments be utilized?"
          vmodelName="usage"
        />
        <!-- Action:group -->
        <div class="actionBtns relative">
          <button
            class="bg-transparent items-center absolute right-0 top-2 p-[1em] flex flex-row text-accent-400 font-['Csemibold'] cursor-pointer text-[1.25em] gap-2"
            type="submit"
          >
            Next Step <IconArrow />
          </button>
        </div>
      </VForm>
    </FormArch>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import FormArch from '@/components/FormArch.vue'
import IconArrow from '@/components/IconArrow.vue'
import InputBox from '@/components/InputBox.vue'
import { Form as VForm } from 'vee-validate'
import FormHeader from '@/components/FormHeader.vue'
import { supabase } from '@/utils/supabase'
import { ref } from 'vue'
const data = ref()
import * as Yup from 'yup'
import Swal from 'sweetalert2'

import { useRouter } from 'vue-router'

const router = useRouter()

interface Business {
  revenueModel: String
  tokenomicsAllocation: String
  country: String
  financial: String
  recurringRevenue: String
  usage: String
  previousAmountRaised: String
}

const businessModelSchema = Yup.object().shape({
  revenueModel: Yup.string().required(),
  tokenomicsAllocation: Yup.string().required(),
  country: Yup.string().required(),
  financial: Yup.string().required(),
  recurringRevenue: Yup.string().required(),
  usage: Yup.string().required(),
  previousAmountRaised: Yup.string().required()
})
const nextStep = async (values: any) => {
  values = values as Business
  const formId = localStorage.getItem('FormID')
  const business = { ...values, id: formId }

  try {
    const { data, error } = await supabase.from('BusinessModel').insert(business)

    if (error) {
      Swal.fire({
        text: 'error Occurred retry',
        icon: 'error',
        buttonsStyling: false,
        confirmButtonText: 'Try again!',
        heightAuto: false,
        customClass: {
          confirmButton: 'btn font-[cbold] bg-[#d00000] p-[1em] rounded-xl text-white'
        }
      })
    }
    Swal.fire({
      text: 'Form Submitted Sucessfully',
      icon: 'success',
      buttonsStyling: false,
      heightAuto: false,
      customClass: {
        confirmButton: 'btn font-[cbold] bg-[#007200] px-[2em] p-[1em] rounded-xl  text-white'
      }
    }).then(() => {
      router.push({ name: 'token' })
    })
  } catch (error) {
    Swal.fire({
      text: 'error Occurred retry',
      icon: 'error',
      buttonsStyling: false,
      confirmButtonText: 'Try again!',
      heightAuto: false,
      customClass: {
        confirmButton: 'btn font-[cbold] bg-[#d00000] p-[1em] rounded-xl text-white'
      }
    })
  }
}
</script>
