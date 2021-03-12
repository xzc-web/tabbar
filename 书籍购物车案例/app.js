var app = new Vue({
    el: '#app',
    data: {
        book: [
            {
                id: 1,
                name: '一',
                date: '2006',
                price: 85,
                count: 1,
            },
            {
                id: 2,
                name: '二',
                date: '2006',
                price: 45,
                count: 1,
            },
            {
                id: 3,
                name: '三',
                date: '2008',
                price: 65,
                count: 1,
            },
            {
                id: 4,
                name: '四',
                date: '2009',
                price: 185,
                count: 1,
            },
        ]
    },
    methods: {
        // getfinalprice(price) {
        //     return '*' + price.toFixed(2)

        // }
        add(index) {
            this.book[index].count++
        },
        sub(index) {
            this.book[index].count--
        },
        remove(index) {
            this.book.splice(index, 1)
        }
    },
    computed: {
        total() {
            let total = 0;
            // 第一种方法
            // for (let i = 0; i < this.book.length; i++) {
            //     total += this.book[i].price * this.book[i].count
            // }
            // return total
            // 第二种
            // for (let i in this.book) {
            //     total += this.book[i].price * this.book[i].count
            // }item.price*item.count
            for (let item of this.book) {
                total += item.price * item.count
            }
        }

    },
    filters: {
        // 过滤器
        showprice(price) {
            return '*' + price.toFixed(2)
        }
    }
})