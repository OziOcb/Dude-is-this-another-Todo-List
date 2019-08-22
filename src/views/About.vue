<template>
  <v-container>
    <v-layout wrap :class="{ 'offset-top': $vuetify.breakpoint.smAndDown }">
      <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
        <h1 class="text-xs-center mb-3">
          Dude Is This Another TodoList?!
        </h1>

        <div class="mb-5">
          <h2>Hi!</h2>
          <p>
            I am glad you are here! Let me guess... are you a headhunter looking
            for a good programmer that will expand your client's existing dev
            team? or wait!... are you?... hmmm... a Lead Developer in your
            company that is looking for the same as the fellow above? No matter
            which one of them you are, I have great news for you! You came to
            the right place!
          </p>

          <p>
            First, read the Case Study for this project and then visit one of
            the links below to find out more about me.
          </p>
          <a
            class="noUnderline"
            href="https://github.com/OziOcb"
            target="_blank"
          >
            <v-icon>mdi-github-circle</v-icon>GitHub
          </a>

          <a
            class="noUnderline"
            href="https://www.linkedin.com/in/paul-ozyzniewski/"
            target="_blank"
          >
            <v-icon>mdi-linkedin-box</v-icon>LinkedIn
          </a>
        </div>

        <div class="mb-5">
          <h2>Background:</h2>
          <p>
            I have been playing with Vue.js for a while now. During that time, I
            have built several small Single Page Applications (
            <a
              href="https://en.wikipedia.org/wiki/Single-page_application"
              target="_blank"
            >
              SPA
            </a>
            ) using just the 'vanilla' Vue which let me learn about Vue's
            ecosystem and also, helped me gain experience and confidence in
            using it. Finally, I decided to start expanding my knowledge on to
            the most common libraries and frameworks that are used with Vue.
          </p>

          <p>
            I am aware that making a ToDo List is a cliche. However, my approach
            was slightly different. From day one, my goal was to use only
            official documentations that are available. That means no YouTube,
            no StackOverflow, no GitHub... (what can I say? I love challenges)
          </p>
        </div>

        <div class="mb-5">
          <h2>Problem:</h2>
          <p>
            I knew that I want to use them: <br />
            Vuex, VueRouter, Firebase (Authentication, RealtimeDb and hosting)
          </p>

          <p>
            Unfortunately, as you can probably guess, not all documentations are
            at the same level. Some of them are 10/10 (
            <a href="https://vuejs.org/" target="_blank">vuejs.org</a>
            ) some of them are on the opposite side of that scale (
            <a href="https://vuetifyjs.com/" target="_blank">vuetifyjs.com</a>
            ). That leads to many frustrations and slows down the entire
            developing process.
          </p>

          <p>
            Also, I found out that setting up the Firebase Database can be a
            very tedious job. Fortunately, solutions like Vuefire & Vuexfire
            make the entire process straightforward (definitely I am going to
            use them on my next Firebase project)
          </p>
        </div>

        <div class="mb-5">
          <h2>What I learned:</h2>
          <p>
            Probably the biggest takeaway from the project is: 'Always do good
            research about technologies that you are going to use before you
            start a project'. I admit I started this one with just minimum
            planning. For example, I would not use Vuetify as my Material Design
            Framework of choice, simply because working with it's official
            documentation is hard and confusing. Instead, I would use Quasar (
            <a href="https://quasar.dev/" target="_blank">Quasar</a>
            ). It offers everything that Vuetify does (and more) and, what is
            more important, the documentation is excellent.
          </p>

          <p>
            The second lesson, worth to mention, is the importance of testing
            the code that you write. It would probably save me a lot of time I
            wasted just by clicking through the app after each time I had hit
            save button. Frankly, even if I consider that the project has been
            closed, a part of me still wants to go back and add at least some
            unit tests using
            <a href="https://jestjs.io/" target="_blank">Jest</a> and
            <a href="https://vue-test-utils.vuejs.org/" target="_blank">
              Vue Test Utils
            </a>
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.noUnderline {
  text-decoration: none;
}
</style>
