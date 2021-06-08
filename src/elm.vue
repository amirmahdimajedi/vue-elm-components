<script>
export default {
  props: {
    src:   { type: Object   , required: true  },
    ports: { type: Function , required: false },
    flags: { type: Object   , required: false , default: {} },
  },
  render: (h) => (<div></div>),
  mounted() {

    const {
      $el,
      ports,
      flags,
      src
    } = this

    let app;

    if (src.embed) {

      /* Elm 0.18 */

      app = src.embed($el, flags);

    }
    else if (src.init) {

      /* Elm 0.19 */

      app = src.init({
        node: $el,
        flags
      });

    }

    if (app && (typeof ports !== "undefined")) {
      ports(app.ports);
    }

  }
};
</script>