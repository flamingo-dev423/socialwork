<template>
  <div class="h-screen w-full">
    <div class="flex h-screen py-6 px-6">

      <!-- extreme left-side -->
      <div class="bg-[#ffffff] w-1/5 border-r">
        <div class="flex">
          <div class="flex flex-col bg-[#302666] rounded-full mr-2 w-6 justify-center items-center">
          <Icon icon="ic:round-tag-faces" class="text-white" />
        </div>
          <h1 class="text-[#302666] non-opt font-semibold flex flex-col">Socialwork</h1>
        </div>

        <!-- social link --extreme left-side -->
        <div class="mt-8">
          <h1 class="font-bold text-xs text-[#302666] non-opt uppercase mb-6">social</h1>
          <div class="flex flex-col">
            <div v-for="socialLink in socialLinks" :key="socialLink" class="flex flex-row mb-4 items-center">
              <div class="bg-[#A1A3B6] hover:bg-[#302666] rounded-full mr-2 p-1">
                <Icon :icon="socialLink.socialIcons" class="text-white" />
              </div>
            <h1 class="non-opt text-[#302666] text-xs hover:font-semibold cursor-pointer ">{{ socialLink.socialName }}</h1>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <h1 class="font-bold text-xs text-[#302666] non-opt uppercase mb-6">Menu</h1>
          <div class="flex flex-col">
            <div v-for="Menu in Menus" :key="Menu" class="flex flex-row mb-4 items-center">
              <div class="bg-[#A1A3B6] rounded-full mr-2 p-1">
                <Icon :icon="Menu.menuIcons" class="text-white" />
              </div>
            <h1 class="non-opt text-[#302666] text-xs ">{{ Menu.menuName }}</h1>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <h1 class="font-bold text-xs text-[#302666] non-opt uppercase mb-6">Others</h1>
          <div class="flex flex-col">
            <div v-for="Other in Others" :key="Other" class="flex flex-row mb-4 items-center">
              <div class="bg-[#A1A3B6] rounded-full mr-2 p-1">
                <Icon :icon="Other.otherIcon" class="text-white" />
              </div>
            <h1 class="non-opt text-[#302666] text-xs ">{{ Other.otherName }}</h1>
            </div>
          </div>
        </div>
      </div>

      <!-- center full -->
      <div class="bg-[#ffffff] w-2/3 mx-4">
        <div class="grid grid-cols-4 gap-2">
          <div v-for="rating in ratings" :key="rating" class="flex border rounded-md px-2 py-2">
            <div class="bg-[#E6EEFB] rounded-full w-8 h-8 justify-center items-center mr-2 flex flex-col">
              <Icon :icon="rating.iconify" class="text-[#302666] text-xl" />
            </div>
            <div class="flex flex-col">
              <h1 class="text-xl non-opt text-[#302666] font-semibold">{{ rating.numberOfFollowers }}</h1>
              <p class="text-sm non-opt text-[#302666] font-thin">{{ rating.follower }}</p>
            </div>
          </div>
        </div>

        <!-- profile sub-screen -->
        <div class="grid grid-cols-2 gap-4 mt-12">
          <div class="flex flex-col justify-center items-center border rounded-md py-4">
            <img src="../assets/Ellipse1.png" alt="" class="bg-[#e5effb] rounded-full w-24 h-24 object-cover border-4 border-[#BD789F]" >
            <h1 class="non-opt font-bold text-xl text-[#302666] my-1">Flamingo.Dev</h1>
            <div class="grid grid-cols-3 gap-4 mt-3">
              <div class="flex flex-col">
                <p class="non-opt font-normal text-[#302666] text-xs">Post</p>
                <h1 class="non-opt font-bold text-[#302666] text-xl ">498</h1>
              </div>
              <div class="flex flex-col">
                <p class="non-opt font-normal text-[#302666] text-xs">Followers</p>
                <h1 class="non-opt font-bold text-[#302666] text-xl ">12,459M</h1>
              </div>
              <div class="flex flex-col">
                <p class="non-opt font-normal text-[#302666] text-xs">Following</p>
                <h1 class="non-opt font-bold text-[#302666] text-xl ">358</h1>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <h1 class="non-opt text-[#302666] text-xl font-bold mb-2">About</h1>
            <p class="non-opt font-thin text-[#302666] text-sm mb-12">Flamingo.dev has been in the social space for about three years and has been active in many areas. He has developed himself in the field of Software Development, UI Design and Vue.js Analyst. He is 22 years old and 2.85cm. Lover of Anime.</p>
            <div class="flex">
              <Icon icon="material-symbols:mark-email-unread-outline-rounded" class="flex flex-col mr-4 bg-[#302666] rounded-full text-white p-1 text-2xl" />
              <Icon icon="humbleicons:navigation" class="flex flex-col text-2xl bg-[#302666] rounded-full text-white p-1 " />
            </div>
          </div>
        </div>

        <!-- sub profile-image -->
        <div class="grid grid-cols-4 gap-2">
          <div class="flex flex-col">
            <img src="../assets/image1.png" alt="">
          </div>
          <div class="flex flex-col">
            <img src="../assets/image2.png" alt="">
          </div>
          <div class="flex flex-col">
            <img src="../assets/Group3.png" alt="">
          </div>
          <div class="flex flex-col">
            <img src="../assets/Group2.png" alt="">
          </div>
         
        </div>

      </div>

      <!-- extreme right-side -->
      <div class="bg-[#ffffff] border-l w-1/6">
        <div class="pl-6">
          <h1 class="text-[#302666] text-xl non-opt font-semibold ">Comments</h1>
          <div class="flex flex-col">
            <div v-for="comment in comments" :key="comment" class="mb-4 pb-2 border-b">
            <div class="flex flex-row">
              <img :src="comment.commentImage" alt="" class="w-10 h-10 rounded-full">
              <div class="ml-2">
                <h1 class="font-semibold text-xs text-[#302666] non-opt">{{ comment.commentHeader }}</h1>
                <p class="font-thin text-xs text-[#302666] non-opt">{{ comment.commentSpecial }}</p>
              </div>
            </div>
            <p class="font-thin mt-2 text-xs non-opt">{{ comment.commentComment }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import SocialClone from '@/views/socialclone.vue'
import { Icon } from '@iconify/vue'

export default {
  name: 'SocialClone',
  components: {
    SocialClone,
    Icon
  },
  data() {
    return {
      ratings: [
        {
          id: "1",
          numberOfFollowers: "2,348",
          follower: "weekly followers",
          iconify: "fluent-mdl2:profile-search"
        },
        {
          id: "2",
          numberOfFollowers: "3,232",
          follower: "weekly following",
          iconify: "fluent-mdl2:profile-search"
        },
        {
          id: "3",
          numberOfFollowers: "36,789",
          follower: "weekly likes",
          iconify: "fluent-mdl2:profile-search"
        },
        {
          id: "4",
          numberOfFollowers: "8,358",
          follower: "weekly comments",
          iconify: "fluent-mdl2:profile-search"
        },
      ],

      socialLinks: [
        {
          id: "1",
          socialIcons: "ri:facebook-fill",
          socialName: "Facebook"
        },
        {
          id: "2",
          socialIcons: "ant-design:instagram-outlined",
          socialName: "Instagram"
        },       
        {
          id: "3",
          socialIcons: "fe:twitter",
          socialName: "Twitter"
        },       
        {
          id: "4",
          socialIcons: "mingcute:youtube-fill",
          socialName: "Youtube"
        },
        {
          id: "6",
          socialIcons: "cib:tinder",
          socialName: "Tinder"
        },
        {
          id: "7",
          socialIcons: "basil:twitch-solid",
          socialName: "Twitch"
        },
      ],
      Menus: [
        {
          id: "1",
          menuIcons: "akar-icons:statistic-up",
          menuName: "Statisics"
        },
        {
          id: "2",
          menuIcons: "material-symbols:dashboard",
          menuName: "Statisics"
        },
        {
          id: "3",
          menuIcons: "mdi:file-document-minus-outline",
          menuName: "Statisics"
        },
      ],
      Others: [
        {
          id: "1",
          otherIcon: "ant-design:setting-filled",
          otherName: "Settings"
        },
        {
          id: "2",
          otherIcon: "ion:log-out-sharp",
          otherName: "Log Out"
        },
      ],
      comments: [
        {
          id: "1",
          commentImage: require("../assets/Rectangle1.png"),
          commentHeader: "Victoria O.",
          commentSpecial: "Content Creator",
          commentComment: "@Flamingo.dev you've impressive skills that would take you places, meeting you would very much not be a coincidence buh a neccesity and i'm glad that we crossed path with eachother."
        },
        {
          id: "2",
          commentImage: require("../assets/Rectangle1.png"),
          commentHeader: "Stephanie Berks",
          commentSpecial: "Freelancer",
          commentComment: "@Flamingo.dev you've impressive skills that would take you places, meeting you would very much not be a coincidence buh a neccesity."
        },
        {
          id: "3",
          commentImage: require("../assets/Ellipse1.png"),
          commentHeader: "Kerry Sery",
          commentSpecial: "Freelancer",
          commentComment: "@Flamingo.dev meeting you would very much not be a coincidence buh a neccesity and i'm glad that we crossed path with eachother."
        },
        {
          id: "4",
          commentImage: require("../assets/Rectangle1.png"),
          commentHeader: "Katty Mursi",
          commentSpecial: "Freelancer",
          commentComment: "@Flamingo.dev you've impressive skills that would take you places, and i'm glad that we crossed path with eachother."
        },
      ]

    }
  },
}
</script>

<style scoped>
* {
  /* border: 1px solid red; */
}
.opt-font {
  font-family: 'JetBrains Mono', monospace;
}

.non-opt {
  font-family: 'Raleway', sans-serif;
}
</style>
