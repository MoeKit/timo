//@todo add simple time format function
module.exports = friendlyTime = function (time) {
    time = new Date(time).getTime();
    if (!time) {
        return '';
    }
    var nt = (new Date().getTime() );
    var ut = time;
    var vt = (nt - ut) / 1000;
    if (vt <= 0) {
        return '刚刚';
    }
    var date = new Date(time);
    var now = new Date();
    if (vt < 60) {
        return Math.floor(vt) + "秒前";
    } else {
        if (vt < 60 * 60) {
            return Math.floor(vt / 60) + "分钟前";
        } else {
            if (vt < 60 * 60 * 24) {
                if (date.getDate() == now.getDate()) {
                    return "今天" + date.getHours() + ":" + (date.getMinutes() > 9 ? date.getMinutes() : ("0" + "" + date.getMinutes()));
                } else {
                    return "昨天" + date.getHours() + ":" + (date.getMinutes() > 9 ? date.getMinutes() : ("0" + "" + date.getMinutes()));
                }
            } else {
                if (vt < 60 * 60 * 24 * 2) {
                    if (date.getDate() == (new Date(nt * 1000 - 60 * 60 * 24 * 1000 - 1)).getDate()) {
                        return "昨天" + date.getHours() + ":" + (date.getMinutes() > 9 ? date.getMinutes() : ("0" + "" + date.getMinutes()));
                    } else {
                        return "前天" + date.getHours() + ":" + (date.getMinutes() > 9 ? date.getMinutes() : ("0" + "" + date.getMinutes()));
                    }

                } else {
                    if (vt < 60 * 60 * 24 * 3) {
                        if (date.getDate() == (new Date(nt * 1000 - 60 * 60 * 24 * 2 * 1000 - 1)).getDate()) {
                            return "前天" + date.getHours() + ":" + (date.getMinutes() > 9 ? date.getMinutes() : ("0" + "" + date.getMinutes()));
                        } else {
                            return (date.getMonth() + 1) + "月" + date.getDate() + "日";
                        }
                    } else {
                        if ((new Date(nt * 1000).getFullYear()) == date.getFullYear()) {
                            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
                        } else {
                            return (date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
                        }
                    }
                }
            }
        }
    }
};


