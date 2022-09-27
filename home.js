import{
  success,
  warning,
  info,
  generateToast,
  petSelect,

} from './ui.js';
success.addEventListener('click', (e) => {
  generateToast({
    message: e.currentTarget.dataset.message,
    background: "hsl(171 100% 46.1%)",
    color: "hsl(171 100% 13.1%)",
    length: "5000ms",
  })
  var value = petSelect.options[petSelect.selectedIndex].value;
  console.log(value);
})

info.addEventListener("click", () => {
  generateToast({
    message: "✍️ Write this down… ✍️",
    background: "hsl(51 97.8% 65.1%)",
    color: "hsl(51 97.8% 12.1%)",
    length: "8000ms",
  });
});

warning.addEventListener("click", () => {
  generateToast({
    message: "⚠️ Ya sure about that? ⚠️",
    background: "hsl(350 100% 66.5%)",
    color: "hsl(350 100% 13.5%)",
  });
});