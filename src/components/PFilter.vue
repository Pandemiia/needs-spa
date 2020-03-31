<template>
  <div class="p-filter">
    <div
      class="p-filter__item"
      :class="[
        `p-filter__item_color_${color}`,
        { 'is-active': value.length === 0 },
      ]"
      @click="handleSetAll"
    >
      Усі
    </div>
    <div
      v-for="(item, index) in options"
      :key="index"
      class="p-filter__item"
      :class="[
        `p-filter__item_color_${color}`,
        { 'is-active': value.includes(item.value) },
      ]"
      @click="handleSetValue(item.value)"
    >
      {{item.label}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'p-filter',

  props: {
    value: {
      required: true,
    },

    options: {
      type: Array,
      required: true,
    },

    color: {
      type: Number,
      validator: function (value) {
        return [0, 1, 2].indexOf(value) !== -1
      },
      default: 0,
    },
  },

  methods: {
    handleSetAll() {
      this.$emit('input', []);
    },

    handleSetValue(value) {
      const localValue = [this.value];

      if (localValue.includes(value)) {
        localValue
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.p-filter {

  &__item {
    display: inline-block;
    font-size: 12px;
    margin-right: $hp;
    margin-bottom: $vp / 2;
    padding: 2px 10px;
    border-radius: 10px;
    cursor: pointer;
    border: solid 1px aquamarine;
    transition: background-color 0.2s;

    &_color_0 {
      border: solid 1px aquamarine;
    }

    &_color_0.is-active {
      background-color: aquamarine;
    }

    &_color_0:hover {
      background-color: aquamarine;
    }

    &_color_1 {
      border: solid 1px cornflowerblue;
    }

    &_color_1.is-active {
      background-color: cornflowerblue;
    }

    &_color_1:hover {
      background-color: cornflowerblue;
    }

    &_color_2 {
      border: solid 1px peachpuff;
    }

    &_color_2.is-active {
      background-color: peachpuff;
    }

    &_color_2:hover {
      background-color: peachpuff;
    }
  }

}
</style>
