<!-- Rememeber overwrites do not generate error. Let can only be declared once. However, if a use strict can catch some coding mistakes and unsafe actions. -->
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
