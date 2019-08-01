import React,{ Component} from 'react';
import {connect} from 'react-redux'
import {HomeArticleItem, HomeArticleItemInfo} from '../style'
class HomeArticle extends Component{

    render(){
        return (
            <div>
                <HomeArticleItem>
                    <HomeArticleItemInfo>
                        <h3 className='title'>
                            来中国发展的泰星现状，Mike人气狂飙，Push有望崛起
                        </h3>
                        <p className='desc'>
                            随着我国人民群众经济能力的提升，文娱行业随之迅速崛起，
                            因此吸引了一大批国外的演员来华发展，前有韩流，后有日潮，
                            都在当时的校园里引起了极大的轰动。...
                        </p>
                    </HomeArticleItemInfo>
                    <img
                        className = 'pic'
                        src="//upload-images.jianshu.io/upload_images/2289219-9144491173e9c747?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                    />
                </HomeArticleItem>
                <HomeArticleItem>
                    <HomeArticleItemInfo>
                        <h3 className='title'>
                            此人仅6首诗传世，一首称作“绝句之最”，一首誉为“五绝之最”
                        </h3>
                        <p className='desc'>
                            王之涣是盛唐的著名诗人，早年精于文章，并善于写诗，多引为歌词。
                        他尤善五言诗，以描写边塞风光为胜，大气磅礴，意境开阔，热情洋溢，韵调优美，朗朗上口...
                    </p>
                    </HomeArticleItemInfo>
                    <img
                        className = 'pic'
                        src="//upload-images.jianshu.io/upload_images/15555149-0c72e66bb98ac095.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                    />
                </HomeArticleItem>
                <HomeArticleItem>
                    <HomeArticleItemInfo>
                        <h3 className='title'>
                            从Python开学，构建你的神经网络
                        </h3>
                        <p className='desc'>
                            他是唱探清水河时深情的辫儿哥哥，他是唱锁麟囊时传承国风的美少年，他是唱京韵大鼓挚挚诚诚的曲艺人。
                            他是唱太平歌词的少年老艺术家，他是涅槃重生的英...
                        </p>
                    </HomeArticleItemInfo>
                    <img
                        className = 'pic'
                        src="https://oimagec7.ydstatic.com/image?id=-4389011752138611362&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60"
                    />
                </HomeArticleItem>
                <HomeArticleItem>
                    <HomeArticleItemInfo>
                        <h3 className='title'>
                            那些年网易云直戳泪点的评论（44）-其实你走了也挺好，要不然我总是在担心你什么时候会离开我                        </h3>
                        <p className='desc'>
                            他是唱探清水河时深情的辫儿哥哥，他是唱锁麟囊时传承国风的美少年，他是唱京韵大鼓挚挚诚诚的曲艺人。
                            他是唱太平歌词的少年老艺术家，他是涅槃重生的英...
                        </p>
                    </HomeArticleItemInfo>
                    <img
                        className = 'pic'
                        src="//upload-images.jianshu.io/upload_images/16235793-519ef5edbb33f295.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                    />
                </HomeArticleItem>

                <HomeArticleItem>
                    <HomeArticleItemInfo>
                        <h3 className='title'>
                            有哪些诗词让你觉得是人间绝句？
                        </h3>
                        <p className='desc'>
                            1、不如归去，孤城越绝三春暮。 —— 朱熹《杜鹃》
                            2、 我有所念人，隔在远远乡。 我有所感事，结在深深肠。 ——白居易《夜雨》
                            3、来如春梦几...
                        </p>
                    </HomeArticleItemInfo>
                    <img
                        className = 'pic'
                        src="//upload-images.jianshu.io/upload_images/9442224-86db97ee36bd18b4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                    />
                </HomeArticleItem>
                <HomeArticleItem>
                    <HomeArticleItemInfo>
                        <h3 className='title'>
                            16年他画了5个美女：一个画卖7000万!
                        </h3>
                        <p className='desc'>
                            “这简直是人肉打印机！” “乱涂鸦，把照片当油画，欺骗观众！”
                            “神作！” …… 中国有位一直很火 且备受争议的画家 他的作品让人顶礼膜拜 又常...
                        </p>
                    </HomeArticleItemInfo>
                    <img
                        className = 'pic'
                        src="//upload-images.jianshu.io/upload_images/16235793-519ef5edbb33f295.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                    />
                </HomeArticleItem>
                <HomeArticleItem>
                    <HomeArticleItemInfo>
                        <h3 className='title'>
                            陌上人如玉，公子世无双
                        </h3>
                        <p className='desc'>
                            他是唱探清水河时深情的辫儿哥哥，他是唱锁麟囊时传承国风的美少年，他是唱京韵大鼓挚挚诚诚的曲艺人。 他是唱太平歌词的少年老艺术家，他是涅槃重生的英...
                        </p>
                    </HomeArticleItemInfo>
                    <img
                        className = 'pic'
                        src="//upload-images.jianshu.io/upload_images/8733570-14afcb7ca90d1230.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                    />

                </HomeArticleItem>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeArticle);