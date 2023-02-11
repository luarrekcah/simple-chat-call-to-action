# Getting Started

- [Preview](https://luarrekcah.github.io/simple-chat-call-to-action/)

CSS - (inside your head)

```html
<link
  href="https://raw.githubusercontent.com/luarrekcah/simple-chat-call-to-action/main/main.css"
  rel="stylesheet"
/>
```

JavaScript - (end of body)

```html
<script src="https://raw.githubusercontent.com/luarrekcah/simple-chat-call-to-action/main/main.js"></script>
<script>
  /*
   * @param pic - picture url to bubble avatar
   * @param text - Message to show
   * @param timer - time to show writing animation (in miliseconds)
   */

  //Example
  chatPopup({
    pic: "https://faro.edu.br/wp-content/uploads/2018/10/249246-afinal-como-saber-se-eu-tenho-perfil-para-ser-engenheiro.jpg",
    text: "Hello dear!",
    timer: 6000,
  });
</script>
```
