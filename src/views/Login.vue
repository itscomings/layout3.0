<template>
  <LayoutLogin>
    <div class="login">
      <v-row>
        <v-col class="login-wrapper">
          <LoginHeader />
          <v-sheet class="pa-16 ma-16 center d-flex justify-center">
            <v-card class="login-card">
              <h1 class="mt-5">Авторизация</h1>
              <p class="pt-3 pb-6">Пожалуйста, введите свои данные.</p>
              <p class="pb-1">Email</p>
              <v-form
                v-model="form"
                @submit.prevent="onSubmit"
              >
                <v-text-field
                  variant="outlined"
                  v-model="email"
                  :readonly="loading"
                  :rules="[required]"
                  clearable
                  label="Введите свою почту"
                  class="mb-0 "
                ></v-text-field>
                <p class="pb-1">Пароль</p>
                <v-text-field
                  variant="outlined"
                  v-model="password"
                  :readonly="loading"
                  :rules="[required]"
                  clearable
                  label="Введите пароль"

                  class="mb-2 rounded-xl"
                ></v-text-field>

                <br>

                <v-btn
                  :loading="loading"
                  block
                  color="indigo"
                  size="large"
                  type="submit"
                  variant="elevated"
                  class="rounded-lg text-body-1"
                >
                  Войти
                </v-btn>
                <br>
                <v-btn
                  :loading="loading"
                  block
                  size="large"
                  type="submit"
                  variant="elevated"
                  class="rounded-lg text-body-1"
                >
                  Зарегистрироваться
                </v-btn>
              </v-form>
            </v-card>
          </v-sheet>
          <LoginFooter />
        </v-col>
        <v-col class="side-context rounded-80 pl-0">
          <p class="side-context__title pt-16 pl-16">
            OneVoiPlanet позволяет быстро телефонизировать ваш бизнес без лишнего оборудования, проводов и географического присутствия.
          </p>
          <div class="side-context__bar">
            <v-img alt="logo"
                   src="@/assets/side-context.svg"
                   class="mt-8 ml-16"
            />
          </div>
        </v-col>
      </v-row>

    </div>
  </LayoutLogin>
</template>

<script>

import LayoutLogin from '@/layout/Login'
import LoginHeader from '@/components/Header/LoginHeader'
import LoginFooter from '@/components/Footer/LoginFooter'

export default {
  name: 'LoginPage',
  components: {
    LoginHeader,
    LayoutLogin,
    LoginFooter
  }
}
</script>

<style lang="scss">

.side-context{
  background-color: $side-base;
}

.side-context-bar{
  background-color: $side-context;
}

.side-context__title{
  font-size: 30px;
  line-height: 44px;
  max-width: 608px;
}
@import "./src/assets/styles.scss";

</style>
