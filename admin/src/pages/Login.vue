<template>
    <div class="login">
        <div class="logo">
            <img src="../assets/logo.png" />
        </div>
        <Form style="width: 400px">
            <FormItem prop="user">
                <Input type="text" placeholder="Username">
                    <Icon type="ios-person" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" placeholder="Password">
                    <Icon type="ios-unlock" slot="prepend" />
                </Input>
            </FormItem>
            <FormItem prop="verifycode">
                <div class="verifycode">
                    <Input type="text" placeholder="Verifycode">
                        <Icon type="ios-unlock" slot="prepend" />
                    </Input>
                    <div class="codeimg">
                        <img src="../assets/logo.png" />
                    </div>
                </div>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style lang="less">
    .login {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        .logo {
            width: 100px;
            img {
                width: 100%;
            }
        }
        .verifycode {
            display: flex;
            .codeimg {
                width: 100px;
                img {
                    height: 32px;
                }
            }
        }
    }
</style>