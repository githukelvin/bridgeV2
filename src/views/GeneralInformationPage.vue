<template>
  <FormHeader />
  <div class="lg:w-[70vw] mx-auto">
    <FormArch step="1" title="General Information">
      <VForm
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
// import { type FormMeta } from "vee-validate";
import * as Yup from 'yup'
import Swal from 'sweetalert2'

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
  projectName: Yup.string().min(4, 'values must exceed 4').required(),
  companyEmail: Yup.string().email().min(4, 'values must exceed 4').required(),
  description: Yup.string().min(4, 'values must exceed 4').required(),
  foundersNames: Yup.string().min(4, 'values must exceed 4').required(),
  founderBackgrounds: Yup.string().min(4, 'values must exceed 4').required(),
  expBlockchain: Yup.string().min(4, 'values must exceed 4').required(),
  teamProfiles: Yup.string().min(4, 'values must exceed 4').required()
})

import { ref } from 'vue'

const data = ref()

import { useRouter } from 'vue-router'

const router = useRouter()

const nextStep = async (values: any) => {
  values = values as GeneralInformation

  try {
    const { data, error } = await supabase.from('GeneralInformation').insert(values).select()

    localStorage.setItem('FormID', data[0].user_id)
    Swal.fire({
      text: 'Form Submitted Sucessfully',
      icon: 'success',
      buttonsStyling: false,
      heightAuto: false,
      customClass: {
        confirmButton: 'btn font-[cbold] bg-[#007200] px-[2em] p-[1em] rounded-xl  text-white'
      }
    }).then(() => {
      router.push({ name: 'techproduct' })
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

<style scoped></style>
