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

    let main = src && src.Elm && src.Elm.Main

    let app;

    if (main.embed) {

      /* Elm 0.18 */

      app = main.embed($el, flags);

    }
    else if (main.init) {

      /* Elm 0.19 */

      app = main.init({
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