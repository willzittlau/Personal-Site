<template>
  <div class="journal">
    <h1>Press</h1>
    <hr />
    <ul>
      <li v-for="data in $options.pressData" :key="data.id">
        <a class="journal-post" target="_blank" :href="data.url">
          <div>
            <h2 class="journal-title">{{ data.title }}</h2>
            <p class="journal-excerpt">{{ data.desc }}</p>
          </div>
        </a>
      </li>
    </ul>
    <br /><br />
    <h1>Brands I've worked with</h1>
    <hr />
    <div class="row">
      <div class="column">
        <img src="/assets/specialized.png" alt="Specialized Canada" />
      </div>
      <div class="column">
        <img src="/assets/tpc.jpg" alt="The Pros Closet" />
      </div>
      <div class="column">
        <img src="/assets/freshair.png" alt="Fresh Air" />
      </div>
      <div class="column">
        <img src="/assets/okbikeski.png" alt="Okanagan Bike & Ski" />
      </div>
    </div>
    <h3>
      For enquiries:
      <a href="mailto:contact@willzittlau.com">contact@willzittlau.com</a>
    </h3>
  </div>
</template>

<script>
import pressData from "../content/press.json";
export default {
  pressData: pressData,
  head: {
    title: "Will Zittlau - Press",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Will Zittlau - Press",
      },
    ],
  },
};
</script>

<style scoped>
.column {
  float: left;
  width: 100%;
  padding: 5px;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}
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
  padding-bottom: 2rem;
}
.journal img {
  height: 100px;
}
h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
}
ul {
  width: 100%;
}
.journal-post {
  display: block;
  padding: 1rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.journal-post > * {
  transition: transform 0.5s ease;
}
.journal-post:hover {
  background-color: #f8f8f8;
}
.journal-post:hover > * {
  transform: translateX(3rem);
}
.journal-post h1,
.journal-post h2 {
  margin: 0;
  padding: 0;
}
.journal-title {
  font-size: 1.5rem;
  color: rgb(50, 50, 50);
  font-weight: 600;
}
.journal-excerpt {
  color: black;
}
@media (min-width: 560px) {
  .journal-post {
    padding: 1rem 0;
  }
  .container.journal {
    min-width: 100vw;
  }
}
@media (min-width: 860px) {
  .journal-post {
    padding: 1rem 0;
  }
  .container.journal {
    min-width: 100vw;
  }
  .column {
    width: 33.33%;
  }
  .journal img {
    height: 200px;
  }
}
</style>