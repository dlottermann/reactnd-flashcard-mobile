import { AsyncStorage } from 'react-native'
export const FLASHCARD_NOTIFICATION_KEY = 'FlashCardMobile:notification'
import { Notifications, Permissions } from 'expo'

export const camelize = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return "" 
    return index == 0 ? match.toLowerCase() : match.toUpperCase()
  })
}

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(FLASHCARD_NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  )
}

export const setLocalNotification = () => {
  AsyncStorage.getItem(FLASHCARD_NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync()

            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(20)
            tomorrow.setMintutes(0)

            Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: tomorrow,
                repeat: "day"
              }
            )

            AsyncStorage.setItem(FLASHCARD_NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
}

const createNotification = () => {
  return {
    title: "Let's go!",
    body: "👋 🤓 Don't forget at yours study today!!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  }
}
