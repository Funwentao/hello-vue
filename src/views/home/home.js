export default {
    data () {
        return {
            themes:['primary', 'success', 'info', 'warning', 'danger'],
            currentTheme:'primary',
            checked: true,
            input: '',
            options: [{
                value: '选项1',
                label: '黄金糕'
              }, {
                value: '选项2',
                label: '双皮奶'
              }, {
                value: '选项3',
                label: '蚵仔煎'
              }, {
                value: '选项4',
                label: '龙须面'
              }, {
                value: '选项5',
                label: '北京烤鸭'
              }],
              value: '',
              value1: 0,
              value2: true

        }
    },
    created: function() {
        document.getElementsByTagName('body')[0].classList.add("primary");
    },
    methods :{
        themeChange: function(theme) {
            const { currentTheme } = this;
            document.getElementsByTagName('body')[0].classList.remove(currentTheme);
            document.getElementsByTagName('body')[0].classList.add(theme);
            this.currentTheme = theme
        }
      
    }
}