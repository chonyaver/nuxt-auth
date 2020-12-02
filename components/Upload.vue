/* eslint-disable vue/comment-directive */ /* eslint-disable prettier/prettier
*/
<template>
  <div>
    <div class="row">
      <div class="col-12 is-align-content-center">
        <h4>Upload to Cloudinary</h4>

        <input
          name="image"
          type="file"
          accept=".jpeg,.jpg,image/jpeg,image/jpg"
          aria-label="upload image button"
          class="file-input"
          @change="selectFile"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async selectFile(e) {
      const file = e.target.files[0]

      /* Make sure file exists */
      if (!file) return

      /* create a reader */
      const readData = (f) =>
        new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(f)
        })

      /* Read data */
      const data = await readData(file)

      /* upload the converted data */
      // eslint-disable-next-line no-unused-vars
      const instance = await this.$Cloudinary.upload(data, {
        folder: 'strapi',
        uploadPreset: 'kyq2vccp'
      })
    }
  }
}
</script>
