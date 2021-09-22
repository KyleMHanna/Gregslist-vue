<template>
  <form class="bg-white rounded p-3 shadow visually-hidden"
        onsubmit="app.housesController.addHouse()"
        id="house-form"
  >
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input
        v-model="editable.price"
        id="price"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="year" class="">year:</label>
      <input type="number" class="form-control" name="year" id="year">
    </div>

    <div class="form-group">
      <label for="bedrooms" class="">Bedrooms:</label>
      <input v-model="editable.bedrooms" type="number" class="form-control" name="bedrooms" id="bedrooms">
    </div>
    <div class="form-group">
      <label for="bathrooms" class="">Bathrooms:</label>
      <input v-model="editable.bathrooms" type="number" class="form-control" name="bathrooms" id="bathrooms">
    </div>
    <div class="form-group">
      <label for="description" class="">Description:</label>
      <textarea v-model="editable.description"
                type="text"
                class="form-control"
                name="description"
                id="description"
                rows="5"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="img" class="">img:</label>
      <input v-model="editable.img" type="url" class="form-control" name="img" id="img">
    </div>
    <div class="d-flex justify-content-between my-3">
      <button type="button" data-bs-dismiss="modal" aria-label="Close" class="btn text-dark lighten-20 text-uppercase selectable">
        <b>
          cancel
        </b>
      </button>
      <button type="submit" class="btn text-primary text-uppercase selectable">
        <b>
          submit
        </b>
      </button>
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>
