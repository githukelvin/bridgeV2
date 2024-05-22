<template>
 <div>
  <TheHeader/>
  <div class="heroSection w-vw bg-primary-500 pt-20">
    <div
      class="flex flex-col gap-8 items-center mt-8 lg:w-[80vw] md:w-[90vw] md:mx-auto lg:grid lg:grid-cols-[auto_23em] lg:gap-2 pb-[7em]"
    >
      <div class="details flex flex-col items-center lg:items-start">
        <h1
          class="text-[2.2em] px-3 font-['Cbold'] text-white text-center lg:text-start lg:pr-[8em]"
        >
          We Specialize In Bridging Web3 Innovators to Investors Facilitating Them to Get Funding.
        </h1>
        <!-- <a  href="/investForm"  class="bg-accent-500 px-4 py-3  text-[1.2em] font-['Cbold'] rounded-sm text-primary-500 lg:mt-7">Share an Investment Opportunity</a> -->
        <a
          href="mailto:investments@br-ge.com"
          class="bg-accent-500 px-4 py-3 text-[1.2em] font-['Cbold'] rounded-sm text-primary-500 lg:mt-7"
          >Share an Investment Opportunity</a
        >
      </div>
      <div class="flex items-end">
        <HeroImage />
      </div>
    </div>
  </div>
  <div class="overflow-x-visible">
    <section id="whyus">
      <div id="" class="lg:w-[80vw] md:w-[90vw] md:mx-auto mb-10 px-[2em]">
        <h1
          class="text-center font-['Gsemibold'] text-[2em] text-shade-200 underline decoration-accent-500 decoration-4 underline-offset-8"
        >
          Why Us
        </h1>
        <div class="cards grid grid-cols-1 gap-10 lg:grid-cols-3 py-[1.5em]">
          <SectCard
          tittle="Preparing to Fundraise"
            :image="bulbImage"
            description="You’ve got a great idea and you’ve nailed down the basics. But to really impress investors, you need to know what they are really keen on. We will help you make your pitch irresistible"
          />
          <SectCard
          tittle="Ready to Fundraise"
            :image="shakeImage"
            description="Your startup is primed and ready to turn heads. You’ve got everything in place to impress the VC’s, angels, and investors. Now lets get out there and show them why they should be falling over each other to back your venture"
          />
          <SectCard
          tittle="Raising the Next Round"
            :image="rockectImage"
            description="Alright, so you’ve already got your funding for your startup, that’s awesome. Now it’s time to level up ad secure even more capital and backing from VC’s. Let’s take this thing to the next level!"
          />
        </div>
      </div>
    </section>
    <section id="about" class="overflow-x-visible">
      <div class="bg-[#84a1bf63] overflow-x-visible">
        <div
          class="about lg:w-[80vw] md:w-[90vw] md:mx-auto grid grid-cols-1 gap-[1em] lg:grid-cols-2 px-[2em] pb-[2em] lg:items-center"
        >
          <div class="img mb-6 relative overflow-x-visible">
            <div
              class="border-2 lg:ml-4 border-accent-500 w-[300px] h-[300px] lg:w-[350px] lg:h-[340px] absolute -top-5"
            ></div>
            <img
              class="lg:-mt-12 -mt-10 ml-4 w-[330px] lg:ml-10 relative z-20"
              :src="SectionImage"
            />
          </div>
          <div id="about" class="info mt-4">
            <h1 class="text-center md:text-start text-[1.25em] font-['Csemibold'] text-accent-500">
              About Us
            </h1>
            <h2 class="font-['Gsemibold'] text-[2em] text-shade-200 text-center md:text-start">
              Global Investment at Your Fingertips
            </h2>
            <p class="font-['Cregular'] text-[1.25em] text-shade text-center md:text-start">
              At Bridge, we recognize the disconnect between innovators and investors. That is why
              we are here to bridge the gap . Our mission is clear, linking visionary innovators
              from all corners of the globe with diverse range of investors worldwide . With our
              commitment to connectivity, we're creating opportunities and fueling innovation on a
              global scale
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div
    id="greatIdeas "
    class="flex flex-col lg:mx-auto items-center gap-[1em] justify-center py-12"
  >
    <p
      class="text-center text-[1.5em] lg:text-[2em] text-shades-200 px-6 font-['Gsemibold'] lg:w-[80vw] md:w-[90vw] md:mx-auto"
    >
      Great ideas deserve great opportunities. Bridge your path to success with the right funding
    </p>
    <!-- <a  href="/investForm"  class="bg-accent-500 px-4 py-3  text-[1.2em] font-['Cbold'] rounded-sm text-primary-500 lg:mt-7">Share an Investment Opportunity</a> -->
    <a
      href="mailto:investments@br-ge.com"
      class="bg-accent-500 px-4 py-3 text-[1.2em] font-['Cbold'] rounded-sm text-primary-500 lg:mt-7"
      >Share an Investment Opportunity</a
    >
    <!-- <button class="bg-accent-500 px-4 py-3 lg:w-fit lg:mx-auto  text-[1em] font-['Csemibold'] rounded-sm text-primary-500 lg:mt-7">Share an investment Opportunity</button> -->
  </div>

  <div id="contact">
    <TheFooter/>
  </div>
 </div>
</template>

<script setup lang="ts">
import SectCard from '@/components/SectCard.vue'
import bulbImage from '@/assets/images/bulb.svg'
import shakeImage from '@/assets/images/shake.svg'
import rockectImage from '@/assets/images/rocket.svg'
import SectionImage from '@/assets/images/imagesection.svg'
import  TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<style scoped>
.heroSection{
	clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
/* background-color: #000000 */
}
</style>

