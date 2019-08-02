import styled from 'styled-components'

export const HomeWrapper = styled.div`
       width : 960px;
       margin : 0 auto;
       overflow : hidden;
`
export const HomeLeft = styled.div`
	   width: 66.6%;
       float : left;
       padding : 30px 0 0 15px;
       box-sizing : border-box;
`
export const HomeArticleItem = styled.div`
        overflow: hidden;
	    border-bottom: 1px solid #dcdcdc;
	    padding : 15px 2px 20px 0px;
	    margin: 0 0 15px;
	    .pic{
	        display : block;
	        width : 150px;
	        border-radius : 10px;
	        float : right;
	    }
`
export const HomeArticleItemInfo = styled.div`
    width: calc(100% - 160px);
    float: left;
    .title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		margin-bottom : 4px;
		color: #333;
		cursor : pointer;
		&:hover{
			text-decoration : underline;
		}
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`
/* 右侧区域 -----------------------start-------------------------------- */
export const HomeRight = styled.div`
	   width: 29%;
       float : right;
       margin-left : 3%;
       box-sizing : border-box;
       padding-top : 30px;
`
export const RightBorderWrapper = styled.div`
    min-height: 228px;
    img{
            width : 100%;
            min-height: 50px;
            margin-bottom: 6px;
            border-radius: 4px;

    }
`

//推荐区域
export const RightRecommendWrapper = styled.div`
    min-height: 228px;
    margin-top : 15px;
`
export const RightRecommendTitle = styled.div`
    color : rgb(150, 150, 150);
    font-size: 14px;
    margin-bottom : 10px;
`
export const RightRecommendSwitch = styled.div`
    float : right;
    font-size: 14px;
	cursor : pointer;
	.spin{
	    font-weight : 500;
	    font-size : 14px;
	    display : block;
	    margin-right : 3px;
        float : left;
	}
`
export const RightRecommendList = styled.div`
    min-height: 228px;
`
export const RightRecommendItem = styled.div`
    margin-top: 15px;
    line-height : 20px;
    overflow : hidden;
    .avatar{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        img{
            width: 100%;
            height: 100%;
            box-sizing : border-box;
            border: 1px solid #ddd;
            border-radius : 50%;
        }
    }
    .recommend-title{
        color: #333;
        display : block;
        padding-top: 5px;
        margin-right: 80px;
        text-decoration : none;
    }
    .recommend-desc{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
        margin-right: 60px;
    }
    .follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        text-decoration : none;
        font-size: 13px;
        color: #42c02e;
        .follow-icon{
            font-size: 13px;
        }
    }
`

/* 右侧区域 -----------------------end-------------------------------- */
/* 回到顶部 -----------------------end-------------------------------- */
export const BackTop = styled.div`
	position: fixed;
	right: 40px;
	bottom: 40px;
	width: 52px;
	height: 52px;
	line-height: 50px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
	.back-top{
		font-size: 20px;
	}
`
/* 回到顶部-----------------------end-------------------------------- */
