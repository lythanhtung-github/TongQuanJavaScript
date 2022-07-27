function timeConversion(s) {
    return (s || '').split(':').reduce((target, item, index) => {
        item = !index
            ?
            ((s || '').includes('PM')
                ? (+item < 12 ? `${+item + 12}` : item)
                : (+item < 12 ? item : '00')
            )
            :
            item.replace(/PM|AM/gi, '');

        target.push(item);

        return target;
    }, []).join(':');
}
timeConversion(07:05:45PM);
