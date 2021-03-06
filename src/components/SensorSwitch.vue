<template lang="html">
  <svg
    v-if="updatedSensor.type && hasRightType(updatedSensor.type)"
    :viewBox="viewBox"
    :height="updatedHeight"
    :width="updatedWidth"
    class="sensor-switch"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <text
      :transform="`translate(${updatedWidth / 2}, ${updatedHeight / 10})`"
      text-anchor="middle"
      x="0"
      class="sensor-title"
      @click="flipSide(!aSide)"
    >
      {{ updatedSensor.name }}
    </text>
    <circle
      :transform="`translate(${updatedWidth / 1.2}, ${updatedHeight / 10})`"
      :r="`${updatedWidth / 15}`"
      class="delete-button"
      @click="deleteSensor(updatedSensor)"
    />
    <g
      v-if="updatedSensor.type === 3200 || updatedSensor.type === 3342"
      :transform="`translate(${updatedWidth / 10}, ${updatedHeight / 6.4})`"
      @click.prevent.stop="
        updateSensor(updatedSensor, 5500, !updatedSensor.resources['5500'])
      "
    >
      <image
        x="0"
        y="0"
        :transform="`translate(${updatedWidth / 5}, ${updatedHeight / 5.3})`"
        :height="`${updatedHeight / 2.67}`"
        :width="`${updatedWidth / 2.5}`"
        v-bind="{
          'xlink:href': updatedSensor.resources['5500']
            ? updatedSensor.icons[0]
            : updatedSensor.icons[1],
        }"
        class="sensor-icon"
      />
      <circle
        :stroke="
          updatedSensor.resources['5500']
            ? colors.successColor
            : colors.warningColor
        "
        :cy="`${updatedHeight / 2.67}`"
        :cx="`${updatedWidth / 2.5}`"
        :r="`${updatedWidth / 2.5}`"
        class="sensor-button"
      />
    </g>
    <g
      v-else-if="updatedSensor.type === 3201"
      :transform="`translate(${updatedWidth / 10}, ${updatedHeight / 6.4})`"
      @click.prevent.stop="
        updateSensor(updatedSensor, 5550, !updatedSensor.resources['5550'])
      "
    >
      <image
        x="0"
        y="0"
        :transform="`translate(${updatedWidth / 5}, ${updatedHeight / 5.3})`"
        :height="`${updatedHeight / 2.67}`"
        :width="`${updatedWidth / 2.5}`"
        v-bind="{
          'xlink:href': updatedSensor.resources['5550']
            ? updatedSensor.icons[0]
            : updatedSensor.icons[1],
        }"
        class="sensor-icon"
      />
      <circle
        :stroke="
          updatedSensor.resources['5550']
            ? colors.successColor
            : colors.warningColor
        "
        :cy="`${updatedHeight / 2.67}`"
        :cx="`${updatedWidth / 2.5}`"
        :r="`${updatedWidth / 2.5}`"
        class="sensor-button"
      />
    </g>
  </svg>
</template>

<script>
import { checkComponentType, getComponentResource } from '@/methods';
import SensorEvents from '@/mixins/sensor-events';

/**
 * @module components/SensorSwitch
 * @description Child component called when catching these IDs : 3200, 3201, 3342
 * @description Resources : input state : 5500, counter : 5501, onTime: 5852, offtime : 5854
 * @description output state : 5550, output polarity : 5551 appType 5750
 */
export default {
  name: 'SensorSwitch',

  mixins: [SensorEvents],

  computed: {
    colors() {
      return getComponentResource('switch', 'colors');
    },
  },

  methods: {
    hasRightType(type) {
      return checkComponentType('switch', type);
    },
  },
};
</script>
