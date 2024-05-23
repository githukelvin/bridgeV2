<template>
  <div class="lg:w-[70vw] mt-10 mx-auto">
    <FormArch step="4" title="Token Slaes (if applicable)">
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
// @ts-nocheck
import FormArch from '@/components/FormArch.vue'
import IconArrow from '@/components/IconArrow.vue'
import InputBox from '@/components/InputBox.vue'
import { Form as VForm } from 'vee-validate'
import { supabase } from '@/utils/supabase'
import { useRouter } from 'vue-router'
import { FormMeta } from 'vee-validate'
import Swal from 'sweetalert2'
import { ref } from 'vue'
const data = ref()
import * as Yup from 'yup'

const router = useRouter()

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
  const formId = localStorage.getItem('FormID')
  const token = { ...values, id: formId }
  if (!tokenSchema.isValid) {
    Swal.fire({
      text: 'Fill an Empty Filled',
      icon: 'error',
      buttonsStyling: false,
      confirmButtonText: 'Try again!',
      heightAuto: false,
      customClass: {
        confirmButton: 'btn font-[cbold] bg-[#d00000] p-[1em] rounded-xl text-white'
      }
    })
  }

  try {
    const { data, error } = await supabase.from('Token').insert(token)
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
      router.push({ name: 'funding' })
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
