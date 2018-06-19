export default {
    data () {
        return {
            msg : '这里是主页',
            input: '默认值'
        }
    },
    methods :{
        fn : function () {
            alert("主页弹框");
        },
        inputHandler : function (e) {
            let that = this;
            console.log(e);
            that.input += e.data;
        },
        changeHandler : function (e) {
            let that = this;
            console.log(e);
            that.input = e.data;
        }
    }
}