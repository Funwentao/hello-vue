export default {
    data () {
        return {
            msg : '这里是主页',
            msg1: '',
            msg2: '',
            msg3: ''
          
        }
    },
    methods :{
        fn : function () {
            alert("主页弹框");
        },
        changeMsg() {
            this.msg = "Hello world."
            this.msg1 = this.$refs.msgDiv.innerHTML
            this.$nextTick(() => {
              this.msg2 = this.$refs.msgDiv.innerHTML
            })
            this.msg3 = this.$refs.msgDiv.innerHTML
        }
      
    }
}