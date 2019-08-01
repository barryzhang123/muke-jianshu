import React,{ Component} from 'react'
import {
    RightRecommendWrapper,
    RightRecommendTitle,
    RightRecommendList,
    RightRecommendSwitch,
    RightRecommendItem
}from '../style'

class HomeRightRecommend extends Component{
    render(){
        return (
            <RightRecommendWrapper>
                <RightRecommendTitle>
                    推荐作者
                    <RightRecommendSwitch>
                        <i  ref={(current) => {this.spinIcon = current}}className="iconfont spin">&#xe851;</i>
                        换一批
                    </RightRecommendSwitch>
                </RightRecommendTitle>
                <RightRecommendList>
                    <RightRecommendItem>
                        <a className = 'avatar' herf="./">
                            <img src="//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='头像'/>
                        </a>
                        <a className = 'follow' herf="./">关注</a>

                        <a className = 'recommend-title' herf="./">
                            茶点故事
                        </a>
                        <p  className = 'recommend-desc'>
                            写了564.8k字 · 13.7k喜欢
                        </p>
                    </RightRecommendItem>
                    <RightRecommendItem>
                        <a className = 'avatar' herf="./">
                            <img src="//upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt='头像'/>
                        </a>
                        <a className = 'follow' herf="./">关注</a>

                        <a className = 'recommend-title' herf="./">
                            名贵的考拉熊
                        </a>
                        <p  className = 'recommend-desc'>
                            写了564.8k字 · 13.7k喜欢
                        </p>
                    </RightRecommendItem>
                    <RightRecommendItem>
                        <a className = 'avatar' herf="./">
                            <img src="//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt='头像'/>
                        </a>
                        <a className = 'follow' herf="./">关注</a>

                        <a className = 'recommend-title' herf="./">
                            梅拾璎
                        </a>
                        <p  className = 'recommend-desc'>
                            写了564.8k字 · 13.7k喜欢
                        </p>
                    </RightRecommendItem>
                    <RightRecommendItem>
                        <a className = 'avatar' herf="./">
                            <img src="//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt='头像'/>
                        </a>
                        <a className = 'follow' herf="./">关注</a>

                        <a className = 'recommend-title' herf="./">
                            溜溜心情的妈妈
                        </a>
                        <p  className = 'recommend-desc'>
                            写了564.8k字 · 13.7k喜欢
                        </p>
                    </RightRecommendItem>
                    <RightRecommendItem>
                        <a className = 'avatar' herf="./">
                            <img src="//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='头像'/>
                        </a>
                        <a className = 'follow' herf="./">关注</a>

                        <a className = 'recommend-title' herf="./">
                            无限猴子
                        </a>
                        <p  className = 'recommend-desc'>
                            写了564.8k字 · 13.7k喜欢
                        </p>
                    </RightRecommendItem>
                    <RightRecommendItem>
                        <a className = 'avatar' herf="./">
                            <img src="//upload.jianshu.io/users/upload_avatars/2027472/c6401dd5-ccd8-475f-9592-2b16be43ba7f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt='头像'/>
                        </a>
                        <a className = 'follow' herf="./">关注</a>

                        <a className = 'recommend-title' herf="./">
                            绾绾
                        </a>
                        <p  className = 'recommend-desc'>
                            写了564.8k字 · 13.7k喜欢
                        </p>
                    </RightRecommendItem>
                    <RightRecommendItem>
                        <a className = 'avatar' herf="./">
                            <img src="//upload.jianshu.io/users/upload_avatars/2998364/9f8351c3734b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt='头像'/>
                        </a>
                        <a className = 'follow' herf="./">关注</a>

                        <a className = 'recommend-title' herf="./">
                            小嘟嘟
                        </a>
                        <p  className = 'recommend-desc'>
                            写了564.8k字 · 13.7k喜欢
                        </p>
                    </RightRecommendItem>
                    <RightRecommendItem>
                        <a className = 'avatar' herf="./">
                            <img src="//upload.jianshu.io/users/upload_avatars/5565867/eead6b83-452b-42a7-b77e-5dc9109d8a71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt='头像'/>
                        </a>
                        <a className = 'follow' herf="./">关注</a>

                        <a className = 'recommend-title' herf="./">
                            XIAOWANppT
                        </a>
                        <p  className = 'recommend-desc'>
                            写了564.8k字 · 13.7k喜欢
                        </p>
                    </RightRecommendItem>
                </RightRecommendList>
            </RightRecommendWrapper>
        )
    }
}
export default  HomeRightRecommend;