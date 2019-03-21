<template>
    <view class="content" id="container">
		<view>上次体检结果：70， 阴虚，2018-12-12</view>

		<view class="action-row dia-ctn ">     
				<view class="dia-row ">
					<view class="border-row">
						<center>
						<view class="row-cap">面诊</view>
						<view class="dia-circle">
							<img src="http://imgs.aixifan.com/FnvHQGkzeAC5iV1TNaaph1paaLyT?imageView2/1/w/320/h/180" />
						</view>
						<text>面色红润</text>
						</center>
					</view>
				</view>
				<view class="dia-row ">
					<view class="border-row">
						<center>
						<view class="row-cap">面诊</view>
						<view class="dia-circle">
							<img src="http://imgs.aixifan.com/FnvHQGkzeAC5iV1TNaaph1paaLyT?imageView2/1/w/320/h/180" />
						</view>
						<text>面色红润</text>
						</center>
					</view>
				</view>
		</view>
		<view class="action-row ">
			<view class="border-row">
				<view class="row-cap">问诊</view>
				
				<view class="cir-question-ctn" v-for="q in questions" v-bind:key="q.id" v-on:click="showQuestion">
					<view class="cir-question" :style="cirQuestionStyle"><text>{{q.question}}</text></view>
				</view>
			</view>
		</view>
		<view style="text-align: center;"><view class="button">诊断</view></view>
        <view v-if="hasLogin" class="hello">
            
        </view>
        <view v-if="!hasLogin" class="hello">
            
        </view>
		
    </view>
</template>

<script>
    import {
        mapState
    } from 'vuex'
	// import 'babel-polyfill'; // es6 shim
	import Vue from 'vue';
	import myUpload from 'vue-image-crop-upload';

	var questions = require("./questions.json");
	console.log(questions);
    export default {
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data(){
				return {
					name:"7777",
					"questions":questions.rows,
					"cirQuestionStyle":{
						height: "",
					} 
				}
		},
        onLoad() {
            if (false && !this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }
        },
		methods:{
				getHeight(){
					var cirQ = document.getElementsByClassName("cir-question")[0];
					console.log(cirQ);
					console.log(this.cirQuestionStyle.height = window.getComputedStyle(cirQ).width);
					//this.cirQuestionStyle.width = window.innerHeight/4;
				},
				showQuestion(){
					alert(777);
				}
		},
		created(){
			window.addEventListener('resize', this.getHeight);
			//this.getHeight();
		},
		mounted(){
			this.getHeight();
		},
		destroyed(){
			window.removeEventListener("resize", this.getHeight)
		}
    }
</script>

<style>
	*{
		padding: 4px;

	}
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul {
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul>view {
        line-height: 50upx;
    }
	.dia-ctn{
		position: relative;
	}
	.dia-row{
		float: left;
		width: 50%;
		margin: 0;
		padding: 0;
	}
	/* 边框 */
	.border-row{
		border: 1upx solid #259B24;
		min-height: 300upx;
		border-radius: 10px;
		margin: 4px;
		justify-content: center;
	}
	.dia-circle{
		width: 100px;
		height: 100px;
		/* overflow: hidden; */
		
	}
	.dia-circle img{
		width: 100px;
		height: 100px;
		display: block;
		align-items: center;
		justify-content: center;
		/* //overflow: hidden; */
		position: relative;
		border-radius: 50%;
		border: 1px solid black;
		padding: 0;
		
	}
	.cir-question-ctn{
		display: inline-block;
		width: 25%;
		padding: 0;
	}
	.cir-question-ctn .cir-question{
		background: green;
		margin: 4px;
		text-align: center;
		color: white;
		border-radius: 40px;
		overflow: hidden;
		display: table-cell;
		vertical-align: middle;
		text-align: center; 
	}
	.button{
		text-align: center;
		display: inline-block;
		background: #8F8F94;
		color: white;
		border-radius: 4px;
		padding-left: 20px;
		padding-right: 20px;
	}
</style>
