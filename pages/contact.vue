<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-half">
      <form name="contact" method="POST" data-netlify="true">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" name="name" placeholder="Enter your name" />
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="text" name="email" placeholder="Enter your email" />
          </div>
        </div>
        <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <input class="input" type="text" name="subject" placeholder="Enter the subject" />
          </div>
        </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" name="message" placeholder="Enter your message here..."></textarea>
          </div>
        </div>
        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <button type="submit" class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>