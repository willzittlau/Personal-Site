<template>
  <div>
    <div class="journal">
      <h1>Contact</h1>
      <hr />
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="text"
                name="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <input
                class="input"
                type="text"
                name="subject"
                placeholder="Enter the subject"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                class="textarea"
                name="message"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
          </div>
          <div class="field is-grouped is-grouped-centered">
            <div class="control">
              <button type="submit" class="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Will Zittlau - Contact",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Will Zittlau - Contact",
      },
    ],
  },
};
</script>

<style scoped>
hr {
  width: 30%;
}
.journal {
  max-width: 100vw;
  min-width: 75vw;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
}
h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
}
</style>