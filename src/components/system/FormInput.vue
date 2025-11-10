<script setup lang="ts">
import UiText from "../ui/UiText.vue";
import InfoHeader from "./InfoHeader.vue";
import UiInput from "../ui/UiInput.vue";
import UiSelect from "../ui/UiSelect.vue";
import UiCheckbox from "../ui/UiCheckbox.vue";
import UiRadio from "../ui/UiRadio.vue";
import UiSwitch from "../ui/UiSwitch.vue";
import UiTextarea from "../ui/UiTextarea.vue";

import { ref } from "vue";

const inputValue = ref("");
const inputError = ref("");
const selectValue = ref("");
const checkboxValue = ref(false);
const radioValue = ref("option1");
const switchValue = ref(false);
const textareaValue = ref("");
const selectOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];
</script>

<template>
  <section>
    <InfoHeader
      title="Form Components"
      link="https://tailwindcss.com/docs/forms"
      info="Tailwind CSS form elements"
    />

    <div class="space-y-10 mt-6">
      <!-- Input -->
      <div class="space-y-2">
        <UiText size="base" weight="semibold">Text Input</UiText>
        <div class="flex flex-col gap-2 w-80">
          <UiInput v-model="inputValue" placeholder="Default" />
          <UiInput
            v-model="inputValue"
            placeholder="Disabled"
            :disabled="true"
          />
          <UiInput
            v-model="inputValue"
            placeholder="message"
            :message="'Invalid input'"
          />
          <UiInput
            v-model="inputValue"
            placeholder="Error"
            state="error"
            :message="'에러 발생'"
          />
          <UiInput
            v-model="inputValue"
            placeholder="Warning"
            state="warning"
            :message="'경고: 안전하지 않은 패스워드'"
          />
          <UiInput
            v-model="inputValue"
            placeholder="Valid"
            state="valid"
            :message="'확인되었습니다.'"
          />
        </div>
      </div>

      <!-- Select -->
      <div class="space-y-2">
        <UiText size="base" weight="semibold">Select Box</UiText>
        <div class="flex flex-col gap-2 w-80">
          <UiSelect
            v-model="selectValue"
            :options="selectOptions.map((e) => e.label)"
          />
          <UiSelect
            v-model="selectValue"
            :options="selectOptions.map((e) => e.label)"
            :disabled="true"
          />
        </div>
      </div>

      <!-- Checkbox -->
      <div class="space-y-2">
        <UiText size="base" weight="semibold">Checkbox</UiText>
        <div class="flex flex-col gap-2">
          <UiCheckbox v-model="checkboxValue" label="Default" class="h-3 w-3" />
          <UiCheckbox
            v-model="checkboxValue"
            label="Disabled"
            :disabled="true"
          />
          <UiCheckbox
            v-model="checkboxValue"
            label="Disabled"
            :disabled="true"
            class="h-5 w-5"
          />
        </div>
      </div>

      <!-- Radio -->
      <div class="space-y-2">
        <UiText size="base" weight="semibold">Radio Group</UiText>
        <div class="flex gap-4">
          <UiRadio
            v-model="radioValue"
            name="radioGroup"
            value="option1"
            label="Option 1"
          />
          <UiRadio
            v-model="radioValue"
            name="radioGroup"
            value="option2"
            label="Option 2"
          />
          <UiRadio
            v-model="radioValue"
            name="radioGroup"
            value="option3"
            label="Option 3"
          />
        </div>
        <div class="flex gap-4">
          <UiRadio
            v-model="radioValue"
            name="radioGroup2"
            value="option1"
            label="Disabled"
            :disabled="true"
          />
          <UiRadio
            v-model="radioValue"
            name="radioGroup2"
            value="option2"
            label="Disabled"
            :disabled="true"
          />
        </div>
      </div>

      <!-- Switch -->
      <div class="space-y-2">
        <UiText size="base" weight="semibold">Switch</UiText>
        <div class="flex gap-4">
          <UiSwitch v-model="switchValue" />
          <UiSwitch v-model="switchValue" :disabled="true" />
        </div>
      </div>

      <!-- Textarea -->
      <div class="space-y-2">
        <UiText size="base" weight="semibold">Textarea</UiText>
        <div class="flex flex-col gap-2 w-80">
          <UiTextarea v-model="textareaValue" placeholder="Default" />
          <UiTextarea
            v-model="textareaValue"
            resize="none"
            placeholder="resize none"
          />
          <UiTextarea
            v-model="textareaValue"
            placeholder="Disabled"
            :disabled="true"
          />
          <UiTextarea
            v-model="textareaValue"
            placeholder="Error"
            :error="'Invalid text'"
          />
          <UiTextarea
            v-model="textareaValue"
            class="bg-gray-50 border-red-300"
            placeholder="내용을 입력하세요"
          />
        </div>
      </div>
    </div>
  </section>
</template>
