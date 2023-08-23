<template>
  <PageHeader title="Contact" />

  <section id="maincontent" class="Container">
    <a
      href="https://github.com/Vincentvanleeuwen"
      class="ProjectSidebar-social"
    >
      <img class="ProjectSidebar-image" src="#" alt="Github logo" />
      Follow on GitHub →
    </a>
    <a href="#" class="ProjectSidebar-social">
      <img
        class="ProjectSidebar-image"
        src="/images/collaborators/linkedin.svg"
        alt="Github logo"
      />
      Connect on LinkedIn →
    </a>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      v-if="!successMessageRef"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label
        >Name
        <input
          type="text"
          name="name"
          v-model="formData.name"
          placeholder="e.g. John Doe"
          @change="v$.name.$touch"
          :class="{
            Error: v$.email.$error,
            Valid: !v$.email.$invalid,
          }"
      /></label>

      <label
        >Email address
        <input
          type="email"
          name="email"
          v-model="formData.email"
          placeholder="e.g. johndoe@gmail.com"
          @change="v$.email.$touch"
      /></label>

      <label
        >Message
        <textarea
          @change="v$.message.$touch"
          name="message"
          placeholder="Your message here.."
          v-model="formData.message"
        ></textarea>
      </label>
      <Button
        :element="'button'"
        :type="'submit'"
        :title="'Send e-mail'"
      ></Button>
    </form>
    <div v-if="successMessageRef" class="Success">
      <p class="SuccessMessage">Your message has been sent</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
definePageMeta({
  layout: "default",
});

const successMessageRef = ref(false);
const formData = reactive({
  name: "",
  email: "",
  message: "",
});
const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("Your email is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    name: {
      required: helpers.withMessage("The name field is required", required),
    },
    message: {
      required: helpers.withMessage("A message is required", required),
      minLength: helpers.withMessage(
        "The message must be at least 10 characters",
        minLength(10)
      ),
    },
  };
});
const v$ = useVuelidate(rules, formData);
onMounted(() => {
  const handleSubmit = (event: Event) => {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);

    const params = new URLSearchParams();

    for (const pair of (formData as any).entries()) {
      if (typeof pair[1] === "string") {
        params.append(pair[0], pair[1]);
      }
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    })
      .then(() => {
        console.log("Form successfully submitted");
        successMessageRef.value = true;
      })
      .catch((error: Error) => alert(error));
  };

  document.querySelector("form")?.addEventListener("submit", handleSubmit);
});
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
.Container {
  padding: 0 3rem 8rem;
  max-width: 680px;
  margin: 0 auto 1rem;
}
.Success {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  max-width: 680px;
  margin: 0 auto;

  @include breakpoint(medium) {
    justify-content: flex-start;
  }

  @keyframes bouncy {
    0% {
      color: $c-success;
    }
    100% {
      color: $c-black;
    }
  }
  p.SuccessMessage {
    color: $c-success;
    font-family: "Raleway";
    font-weight: 900;
    font-size: 24px;
    text-align: center;
    margin: 0 auto;
    line-height: 2rem;
    animation: 0.5s forwards cubic-bezier(0.91, -0.44, 0.27, 1.42) bouncy;
    opacity: 1;
    @include breakpoint(medium) {
      text-align: left;
      margin: 0;
    }
  }
}
p {
  width: 300px;
  padding-right: 0;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(100px);

  @include breakpoint(medium) {
    width: 680px;
    padding-right: 10rem;
  }

  &:last-of-type {
    margin: 0 auto 1rem;
  }
}
form {
  max-width: 680px;
  margin: 0 auto;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    font-family: "Raleway", sans-serif;
    font-weight: 900;
    letter-spacing: 2px;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(100px);

    input {
      max-width: 100%;
      min-height: 35px;
      margin-top: 6px;
      margin: 0;

      @include breakpoint(medium) {
        max-width: 50%;
      }
    }
    textarea {
      min-height: 150px;
    }
    textarea,
    input {
      border: none;
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
      padding: 10px;
    }
  }

  p:last-child {
    display: flex;
    justify-content: flex-end;
  }
}
.animate-in {
  opacity: 1; /* When the animate-in class is added, the subtitles will become visible */
  transform: translateY(0px);
}
.Error {
  border: 1px solid $c-error;
}
.Valid {
  border: 1px solid $c-success;
}
.ProjectSidebar-social {
  transition: 0.5s;
  opacity: 0;
  transform: translateY(100px);
  display: flex;
  column-gap: 1rem;
  align-items: center;
  text-decoration: none;
  color: $c-black;
  font-weight: bold;
  margin: 2rem auto 0.5rem;
  &.animate-in {
    opacity: 1; /* When the animate-in class is added, the subtitles will become visible */
    transform: translateY(0px);
  }

  &:last-of-type {
    margin: 0 auto 2rem;
  }
  img {
    width: 50px;
    height: 50px;
  }
}

.Button {
  margin-top: 32px;
}
</style>
