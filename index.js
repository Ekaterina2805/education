// // import {} from ''
// // const cds = require('')
// // const klient = require('');
// // import {exportName1  as shortName1, exportName2 as shortName2 } from ''

// // or 

// // import('').then (module => {
// //     let exportName1 = module.exportName1;

// // let exampleObject = {
// //     'Название': 'Hello world',
// // }

// // exampleObjectsArray = []
// // for (let i = 0; i < 100; i++) {
// //     exampleObjectsArray.push(JSON.parse(JSON.stringify(exampleObject)))
// // }

// // let exampleObject2 = {}
// // for (let i = 0; i < 100; i++) {
// //     exampleObject2['Название' + i] = 'Hello world'
// // }

// // for (let i in Object.keys(exampleObject2)) {
// //     exampleObject2['title' + i] = exampleObject2['Название' + i]
// //     delete exampleObject2['Название' + i]
// // }
// // //console.log(exampleObject2, exampleObject2.length, )

// // console.log(exampleObject2)
// // exampleObject.title = exampleObject['Название'];
// // // delete exampleObject['Название'];
// // console.log(exampleObjectsArray)

// // // exampleObject = {
// // //     title : 'Hello world'
// // // }
// // for (let i = 0; i < exampleObjectsArray.length; i++) {
// //     exampleObjectsArray[i].title = exampleObjectsArray[i]['Название'];
// //     delete exampleObjectsArray[i]['Название'];
// // }


// let testObject = {
//    "Ref_Key": "df8c569e-f151-11ec-96ba-525400d594f7",
//    "Number": "шаГЛ-000001",
//    "Date": "0202-06-22T15:05:00",
//    "Posted": true,
//    "Партнер_Key": "090f2d49-9a31-11ec-96ad-525400d594f7",
//    "Контрагент_Key": "090f2d4b-9a31-11ec-96ad-525400d594f7",
//    "Организация_Key": "317737b5-2c2a-11ec-969e-525400d594f7",
//    "СуммаДокумента": 0,
//    "Склад_Key": "0e84a3ba-8b9e-11eb-964d-2cfda134b5bc",
//    "Менеджер_Key": "224a18cc-8bde-11eb-964d-2cfda134b5bc",
//    "ДополнительнаяИнформация": "",
//    "Статус": "КОбеспечению",
//    "ФормаОплаты": "Безналичная",
//    "ДатаОтгрузки": "2022-06-22T00:00:00",
//    "АдресДоставки": "г. СПб, ул. Караваевская, д.23",
//    "НомерПоДаннымКлиента": "",
//    "ДатаПоДаннымКлиента": "0001-01-01T00:00:00",
//    "Грузополучатель_Key": "71fc5736-032d-11eb-9636-2cfda134b5bc",
//    "СпособДоставки": "ДоКлиента",
//    "ВремяДоставкиС": "0001-01-01T00:00:00",
//    "ВремяДоставкиПо": "0001-01-01T00:00:00",
//    "ОсобыеУсловияПеревозки": false,
//    "Сборщик_Key": "00000000-0000-0000-0000-000000000000",
//    "Курьер_Key": "00000000-0000-0000-0000-000000000000",
//    "Номенклатура_Key": "0d3d33a0-14db-11ea-bed9-2cfda134b5bc",
//    "Количество": 1800,
//    "Цена": 7,
//    "Сумма": 12600
// }
// //console.table(testObject)

// // for (let i = 0; i < testObject.length; i++) {
// function Predprijatie(testObject) {
//    let new_obj = {}
//    new_obj['Ref_Key'] = testObject['Ref_Key']
//    new_obj['Number'] = testObject['Number']
//    new_obj['Date'] = testObject['Date']
//    new_obj['Posted'] = testObject['Posted']
//    new_obj['summa_documenta'] = testObject['СуммаДокумента']
//    new_obj['dopolnitelnaya_informaciya'] = testObject['ДополнительнаяИнформация']
//    new_obj['Status'] = testObject['Статус']
//    new_obj['forma_oplaty'] = testObject['ФормаОплаты']
//    new_obj['data_otgruzki'] = testObject['ДатаОтгрузки']
//    new_obj['adres_dostavki'] = testObject['АдресДоставки']
//    new_obj['nomer_po_dannym_klienta'] = testObject['НомерПоДаннымКлиента']
//    new_obj['data_po_dannym_klienta'] = testObject['ДатаПоДаннымКлиента']
//    new_obj['sposob_dostavki'] = testObject['СпособДоставки']
//    new_obj['vremya_dostavki_s'] = testObject['ВремяДоставкиС']
//    new_obj['vremya_dostavki_po'] = testObject['ВремяДоставкиПо']
//    new_obj['osobie_uslovia_perevozki'] = testObject['ОсобыеУсловияПеревозки']
//    new_obj['Quantity'] = testObject['Количество']
//    new_obj['Price'] = testObject['Цена']
//    new_obj['Summa'] = testObject['Сумма']
//    new_obj['Partner_Ref_Key'] = testObject['Партнер_Key']
//    new_obj['Contragent_Ref_Key'] = testObject['Контрагент_Key']
//    new_obj['Organizacia_Ref_Key'] = testObject['Организация_Key']
//    new_obj['Sklad_Ref_Key'] = testObject['Склад_Key']
//    new_obj['Manager_Ref_Key'] = testObject['Менеджер_Key']
//    new_obj['Kuryer_Ref_Key'] = testObject['Курьер_Key']
//    new_obj['Nomenklatura_Ref_Key'] = testObject['Номенклатура_Key']
//    new_obj['Gruzopoluchatel_Ref_Key'] = testObject['Грузополучатель_Key']
//    new_obj['Sborshik_Ref_Key'] = testObject['Сборщик_Key']
//    // }
//    return new_obj
// }

// // delete testObject[СуммаДокумента]
// // delete testObject[ДополнительнаяИнформация]
// //let testObject[Status] = testObject[Статус]
// // delete testObject[Статус]
// //let testObject[forma_oplaty] = testObject[ФормаОплаты]
// // delete testObject[ФормаОплаты]
// //let testObject[adres_dostavki] = testObject[АдресДоставки]
// // delete testObject[АдресДоставки]
// //let testObject[nomer_po_dannym_klienta] = testObject[НомерПоДаннымКлиента]
// // delete testObject[НомерПоДаннымКлиента]

// console.log(Predprijatie(testObject))
// Работа с датами 
// // 1 Дата сейчас по Гринвичу
// const d1 = new Date();
// console.log(d1)
// // 2. мсек
// const d2 = new Date(1630916008000)
// console.log(d2)
// //  3. С указанной датой (день + 1)
// const d3 = new Date('2022 Nov 7')
// console.log(d3)
// // 4. Строку в объект grinvich+3
// const d4 = new Date('Nov 24 2022 17:26:52 ')
// console.log(d4)
// //5. методыls

// const d5 = new Date()
// console.log(d5.getFullYear())
// console.log(d5.getMonth() + 1)// номер месяца 
// console.log(d5.getDay())//день недели начиная с воскресения[0]-суббота[6] 
// console.log(d5.getDate())
// console.log(d5.getTimezoneOffset())
// console.log(d5.getTime())
// console.log(Date.now())

// //функция добавления нуля в начала даты 
// function nullDate(s) {
//    return (s < 10) ? '0' + s : s
// }
// const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
// // Создадим функцию для работы с датами
// function getUserTime(t) {
//    let year = t.getFullYear()
//    let month = nullDate(t.getMonth() + 1)
//    let date = nullDate(t.getDate())
//    let day = days[t.getDay()]
//    let chas = nullDate(t.getHours())
//    let minut = nullDate(t.getMinutes())
//    // console.log(year, month, date, day, chas, minut)
//    return `${year}.${month}.${date} ${chas}:${minut} (${day})`
// }
// console.log(getUserTime(new Date(1669205644956)))
// // [year, month, date, day, chas, minut]
// const day1 = new Date()
// let week_later = new Date(day1.getTime() + 7 * 24 * 3600 * 1000)
// let last_week = new Date(day1.getTime() - 24 * 7 * 3600 * 1000)
// let tomorrow = new Date(day1.getTime() + 24 * 3600 * 1000)
// //console.log(day1)SS
// console.log(getUserTime(week_later))
// console.log(getUserTime(last_week))
// console.log(getUserTime(tomorrow))


