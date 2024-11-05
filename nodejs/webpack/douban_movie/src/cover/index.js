import mp4url from '@/assets/movie.mp4'
import $ from "jquery"
import style from '@/cover/style.module.less'
import musicurl from '@/assets/music.mp3'

function init(){
    const container = $('<div>').addClass(style.container).appendTo('#app')
    const video = $('<video>').prop('src',mp4url)
    .prop('autoplay',true)
    .prop('muted',true)     
    .prop('loop',true)    
    .appendTo(container)
    const audio = $('<audio>').prop('src',musicurl)
    .prop('autoplay',true)  
    .prop('muted',true)   
    .prop('loop',true) .appendTo(container)
    $('<span>').text('DOUBAN MOVIE').addClass(style.textContainer).appendTo(container)

    $(window).on('scroll',function(){
        const clientHeight = document.documentElement.clientHeight
        const scrollTop = document.documentElement.scrollTop
        if(scrollTop >= clientHeight){
            video[0].pause()
            audio[0].pause()
        }else{
            video[0].play()
            audio[0].play()
        }
    })
}

init()