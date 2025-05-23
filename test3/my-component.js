
// my-component.js
import { ref } from "vue"
export default {
    setup() {
        const count = ref(0)
        return { count }
    },
    template: `<div>Count is: {{ count+1+2 }}</div>`
}