<script>
export default {
  props: {
    ports: { type: Object , required: false },
    flags: { type: Object , required: false },
    src:   { type: Object , required: true  },
  },
  render(h) {
    return (<div>
      <div ref="placeholder"></div>
    </div>)
  },
  mounted() {

    const {
      $el,
      $refs: { placeholder },
      ports,
      flags,
      src,
    } = this

    const main = src && src.Elm && src.Elm.Main

    let app;

    if (main.embed) {

      /* Elm 0.18 */

      app = main.embed($el, flags);

    }
    else if (main.init) {

      /* Elm 0.19 */

      /*
      ** Note that Elm 0.19 doesn't treat `node` as a container, but rather as a placeholder.
      ** The Elm App will replace the provided node, rather than mount itself within the provided node.
      ** This can cause runtime errors when unmounting this Vue component.
      ** The workaround is to use an extra <div>, which the virtual DOM doesn't directly control, and allow Elm to replace that node.
      */

      app = main.init({
        node: placeholder,
        flags: flags
      });

    }

    if (app && (typeof ports !== "undefined")) {
      ports(app.ports);
    }

  }
};
</script>