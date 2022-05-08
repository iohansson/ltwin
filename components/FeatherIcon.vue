<script>
import feather from 'feather-icons';

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const featherIcon = computed(() => feather.icons[props.icon]);

    return () => h('svg', {
      innerHTML: featherIcon.value.contents,
      ...featherIcon.value.attrs,
    });
  },
};
</script>
