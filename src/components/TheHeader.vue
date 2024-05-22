<template>
  <header class="fixed lg:pt-3 w-full bg-primary-300 lg:mx-auto lg:w-svw z-50 top-0 flex flex-col">
    <div
      class="navBar lg:w-[82vw] lg:mx-auto px-[1em] flex flex-row justify-between items-center lg:z-10 lg:items-center lg:px-0"
    >
      <div class="logo lg:-ml-[2em] -ml-[.8em]">
        <RouterLink class="font-['Gsemibold'] text-white text-[2em]" to="/"
          ><img class="w-[100px] lg:w-[200px] h-[50px]" :src="Logo" alt="logo"
        /></RouterLink>
      </div>
      <div
        class="nav absolute top-[3.7em] w-full py-[2em] lg:relative z-[9999] left-1/2 bg-primary-300 -translate-x-1/2 lg:mt-0 lg:top-0 lg:p-0 lg:left-0 lg:translate-x-0"
      >
        <!--   -->
        <nav class="">
          <ul class="lg:flex lg:flex-row lg:gap-6 w-full grid flex-col gap-4 justify-center">
            <li>
              <a class="text-[#FEFEFE] font-['Csemibold'] text-xl" href="../#about"
                >About</a
              >
            </li>
            <li>
              <router-link class="text-[#FEFEFE] font-['Csemibold'] text-xl" to="/investForm"
                >Get Investors</router-link
              >
            </li>
            <li>
              <a class="text-[#FEFEFE] font-['Csemibold'] text-xl" href="../#whyus"
                >Why Us</a
              >
            </li>
            <li>
              <a class="text-[#FEFEFE] font-['Csemibold'] text-xl" href="../#contact">
                Contact Us</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="social hidden pointer lg:block lg:flex lg:gap-3 lg:items-center">
        <a target="_blank" href="https://twitter.com/bridge2investor"
          ><svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_96_40"
              style="mask-type: luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="25"
              height="25"
            >
              <path d="M0.5 0.5H24.5V24.5H0.5V0.5Z" fill="white" />
            </mask>
            <g mask="url(#mask0_96_40)">
              <path
                d="M19.4 1.62457H23.0806L15.0406 10.8371L24.5 23.3754H17.0943L11.2897 15.7726L4.65543 23.3754H0.971429L9.57029 13.5183L0.5 1.62629H8.09429L13.3331 8.57429L19.4 1.62457ZM18.1057 21.1674H20.1457L6.98 3.71772H4.79257L18.1057 21.1674Z"
                fill="#FEFEFE"
              />
            </g>
          </svg>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/bridge2investors/posts/?feedView=all"
          ><svg
            width="31"
            height="29"
            viewBox="0 0 31 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.9 0.0833435C2.99826 0.0833435 2.13346 0.417715 1.49584 1.0129C0.858213 1.60808 0.5 2.41533 0.5 3.25704C0.5 4.09876 0.858213 4.90601 1.49584 5.50119C2.13346 6.09637 2.99826 6.43075 3.9 6.43075C4.80174 6.43075 5.66654 6.09637 6.30416 5.50119C6.94179 4.90601 7.3 4.09876 7.3 3.25704C7.3 2.41533 6.94179 1.60808 6.30416 1.0129C5.66654 0.417715 4.80174 0.0833435 3.9 0.0833435ZM0.7 9.04438C0.646957 9.04438 0.596086 9.06405 0.558578 9.09906C0.521071 9.13407 0.5 9.18156 0.5 9.23107V28.6467C0.5 28.7497 0.5896 28.8333 0.7 28.8333H7.1C7.15304 28.8333 7.20391 28.8137 7.24142 28.7787C7.27893 28.7437 7.3 28.6962 7.3 28.6467V9.23107C7.3 9.18156 7.27893 9.13407 7.24142 9.09906C7.20391 9.06405 7.15304 9.04438 7.1 9.04438H0.7ZM11.1 9.04438C11.047 9.04438 10.9961 9.06405 10.9586 9.09906C10.9211 9.13407 10.9 9.18156 10.9 9.23107V28.6467C10.9 28.7497 10.9896 28.8333 11.1 28.8333H17.5C17.553 28.8333 17.6039 28.8137 17.6414 28.7787C17.6789 28.7437 17.7 28.6962 17.7 28.6467V18.1921C17.7 17.4494 18.0161 16.7371 18.5787 16.212C19.1413 15.6868 19.9044 15.3918 20.7 15.3918C21.4956 15.3918 22.2587 15.6868 22.8213 16.212C23.3839 16.7371 23.7 17.4494 23.7 18.1921V28.6467C23.7 28.7497 23.7896 28.8333 23.9 28.8333H30.3C30.353 28.8333 30.4039 28.8137 30.4414 28.7787C30.4789 28.7437 30.5 28.6962 30.5 28.6467V15.7726C30.5 12.1479 27.124 9.31321 23.26 9.64029C22.0644 9.74188 20.8934 10.0181 19.7896 10.4587L17.7 11.2951V9.23107C17.7 9.18156 17.6789 9.13407 17.6414 9.09906C17.6039 9.06405 17.553 9.04438 17.5 9.04438H11.1Z"
              fill="#FEFEFE"
            />
          </svg>
        </a>
      </div>
      <div class="ham lg:hidden">
        <TheHam />
      </div>
    </div>
    <div class="w-full h-[1px] bg-white mt-3"></div>
  </header>
</template>

<script setup lang="ts">
import Logo from "@/assets/images/ColouredVersion.svg"
import TheHam from "./TheHam.vue";
</script>
 
<style scoped>
@media (max-width: 1024px) {
  .nav {
    transform: translateX(-200%);
    transition: transform 0.5s ease;
  }
  .nav.active {
    transform: translateX(-50%);
    transition: transform 0.8s ease-in;
  }
}
</style>
