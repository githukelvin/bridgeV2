<template>
  <FormArch step="2" title="Product/Technology">
    {{ Stage }}
    <VForm
      v-slot="{ meta: formMeta }"
      @submit="nextStep"
      novalidate
      :validation-schema="prodTechSchema"
      class="flex flex-col gap-6 w-[90vw] mx-auto lg:w-full"
    >
      <InputBox
        rows="3"
        id="Overview"
        label="Give an overview of the product/technology"
        vmodelName="Overview"
      />
      <InputBox
        rows="3"
        id="USP"
        label="What is your unique selling propostion?(USP)"
        vmodelName="USP"
      />
      <div class="flex flex-col gap-1">
        <div class="radiosbtns flex flex-col gap-3">
          <label
            class="font-['cregular'] text-base md:text-[1.125em] lg:text-[1.25em] text-shade-200"
            for="stage"
            >What stage of development are you in currently in ?</label
          >
          <div class="radios grid grid-cols-3 gap-3 lg:grid-cols-5">
            <p
              class="flex items-center flex-row fon-['Cregular'] text-base md:text-[1.125em] lg:text-[1.25em] capitalize text-shade-200 gap-2"
            >
              <input
                class="appearance-none checked:bg-primary-500 w-[30px] rounded-full h-[30px] bg-white"
                type="radio"
                value="prototype"
                name="stage"
                v-model="Stage"
                id=""
              />prototype
            </p>
            <p
              class="flex items-center flex-row fon-['Cregular'] text-base md:text-[1.125em] lg:text-[1.25em] capitalize text-shade-200 gap-2"
            >
              <input
                class="appearance-none checked:bg-primary-500 w-[30px] rounded-full h-[30px] bg-white"
                type="radio"
                value="mvp"
                name="stage"
                v-model="Stage"
                id=""
              />mvp
            </p>
            <p
              class="flex items-center flex-row fon-['Cregular'] text-base md:text-[1.125em] lg:text-[1.25em] capitalize text-shade-200 gap-2"
            >
              <input
                class="appearance-none checked:bg-primary-500 w-[30px] rounded-full h-[30px] bg-white"
                type="radio"
                name="stage"
                value="alpha"
                v-model="Stage"
                id=""
              />alpha
            </p>
            <p
              class="flex items-center flex-row fon-['Cregular'] text-base md:text-[1.125em] lg:text-[1.25em] capitalize text-shade-200 gap-2"
            >
              <input
                class="appearance-none checked:bg-primary-500 w-[30px] rounded-full h-[30px] bg-white"
                type="radio"
                value="live"
                name="stage"
                v-model="Stage"
                id=""
              />live
            </p>
            <p
              class="flex items-center flex-row fon-['Cregular'] text-base md:text-[1.125em] lg:text-[1.25em] capitalize text-shade-200 gap-2"
            >
              <input
                class="appearance-none checked:bg-primary-500 w-[30px] rounded-full h-[30px] bg-white"
                type="radio"
                name="stage"
                value="beta"
                v-model="Stage"
                id=""
              />beta
            </p>
          </div>
        </div>
      </div>
      <InputBox
        rows="3"
        id="scalabiliyPlan"
        label="What is your current scalability plan?"
        vmodelName="scalabiliyPlan"
      />
      <div class="trio flex flex-col gap-3 lg:grid lg:gap-6 lg:grid-cols-2">
        <InputBox
          rows="3"
          id="TAM"
          label="What size is your: Total Addressable market?(TAM)"
          vmodelName="TAM"
        />
        <InputBox rows="3" id="SAM" label="Serviceable Addressable market?(SAM)" vmodelName="SAM" />
        <InputBox rows="3" id="SOM" label="Serviceable Obtainable market?(SOM)" vmodelName="SOM" />
      </div>
      <InputBox
        rows="3"
        id="diffCompetitor"
        label="What differentiates you from your competitors? Make sure to mention them?"
        vmodelName="diffCompetitor"
      />

      <!-- Action:group -->
      <div class="actionBtns relative">
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
import InputBox from './InputBox.vue'
import IconArrow from './IconArrow.vue'
import { supabase } from '../utils/supabaseClient'
import { ref } from 'vue'
import { Form as VForm, ErrorMessage as VErrorMessage } from 'vee-validate'
import * as Yup from 'yup'
const data = ref()

// import { useRouter } from "vue-router";

interface ProdTech {
  Overview: String
  USP: String
  Stage: String
  scalabiliyPlan: String
  TAM: String
  SAM: String
  SOM: String
  diffCompetitor: String
}

const prodTechSchema = Yup.object().shape({
  Overview: Yup.string().required(),
  USP: Yup.string().required(),
  // Stage: Yup.string().required(),
  scalabiliyPlan: Yup.string().required(),
  TAM: Yup.string().required(),
  SAM: Yup.string().required(),
  SOM: Yup.string().required(),
  diffCompetitor: Yup.string().required()
})

// const  router = useRouter()

const Stage = ref()
const nextStep = async (values: any) => {
  const stage = Stage.value
  const prodtech = { ...values, stage }
  values = prodtech as ProdTech
  console.log(values)
  data.value = await supabase.from('Product&Technology').select()

  alert('clicked')
}
</script>
