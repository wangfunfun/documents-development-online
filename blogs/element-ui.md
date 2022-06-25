---
title: ELementUI/ElementPlus 踩坑
date: 2022/06/19 14:32:00
categories:
  - Blogs
---

## DateTimePicker 日期时间选择器，选择时间变成 12 小时制

原因是 HH 代表 24 小时制，而 hh 代表 12 小时制，所以默认的时间就变成了[‘12:00:00’, ‘11:59:59’]

```html
<!-- 12小时制 -->
<el-date-picker
  v-model="value1"
  type="datetimerange"
  align="right"
  start-placeholder="开始日期"
  end-placeholder="结束日期"
  value-format="yyyy-MM-dd hh:mm:ss"
  :default-time="['00:00:00', '23:59:59']"
>
</el-date-picker>
```

```html
<!-- 24小时制 -->
<el-date-picker
  v-model="value2"
  type="datetimerange"
  align="right"
  start-placeholder="开始日期"
  end-placeholder="结束日期"
  value-format="yyyy-MM-dd HH:mm:ss"
  :default-time="['00:00:00', '23:59:59']"
>
</el-date-picker>
```
