<template>
  <v-dialog v-model="isOpen" scrollable max-width="720px">
    <v-card>
      <v-toolbar height="64px">
        <!-- <v-img :src="image_src" max-width="56px" class="mr-4"></v-img> -->
        <v-toolbar-title>バフ詳細</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-card-subtitle>
          <div class="mt-2">
            宝具バフ :
            <span v-for="skill in npSkills" :key="skill.description">
              <span>{{ skill.description }}</span>
              <span v-if="npSkills.length >= 2">
                /
              </span>
            </span>
          </div>
          <div class="mt-2">
            宝具OC :
            <span v-for="skill in ocSkills" :key="skill.description">
              <span>{{ skill.description }}</span>
              <span v-if="ocSkills.length >= 2">
                /
              </span>
            </span>
          </div>
          <div class="mt-2">
            保有スキル :
            <span v-for="skill in possessionSkills" :key="skill.description">
              <span>{{ skill.description }}</span>
              <span v-if="possessionSkills.length >= 2">
                /
              </span>
            </span>
          </div>
          <div class="mt-2">
            クラススキル :
            <span v-for="classSkill in classSkills" :key="classSkill.name">
              <span>{{ classSkill.name }}</span>
              <span>{{ classSkill.description }}</span>
              <span v-if="classSkills.length >= 2">
                /
              </span>
            </span>
          </div>
        </v-card-subtitle>
        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-2">
          バフについて
        </h3>
        <ul>
          <li class="mb-2">
            保有スキルのバフ値はスキルLv.10の数値です。
          </li>
          <li class="mb-2">
            宝具OCによるバフ値は切り替え可能です。
          </li>
          <li class="mb-2">
            特攻バフ・特攻宝具のバフ値はチェックボックスをONにすることで自動入力されます。
          </li>
        </ul>
      </v-card-text>
      <v-col style="text-align: right;">
        <v-btn
          color="red"
          text
          style="font-size: 16px;"
          @click="isOpen = false"
        >
          Close
        </v-btn>
      </v-col>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    classSkills: {
      type: Array,
      required: true
    },
    possessionSkills: {
      type: Array,
      required: true
    },
    npSkills: {
      type: Array,
      required: true
    },
    ocSkills: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // image_src: require('assets/altria.png'),
      isOpen: false
    }
  }
}
</script>
