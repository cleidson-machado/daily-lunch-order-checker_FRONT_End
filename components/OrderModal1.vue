!<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
        <div class="modal" @click.stop>
            <img class="check" src="@/static/check-icon.png" alt="" />
                <h6>Saved!</h6>
                <p>Your Details have been saved Successfully</p>
                <button>Go Home</button>
        </div>
        <div class="close" @click="$emit('close-modal')">
            <img class="close-img" src="@/static/close-icon.svg" alt="" />
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'OrderLunchModal',

})

</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 600px;
  width: 800px;
  margin-top: 2%;
  padding: 5px 0;
  border-radius: 5px;
}
.close {
  margin: 2% 0 0 4px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>