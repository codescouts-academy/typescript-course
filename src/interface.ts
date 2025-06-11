enum Sent {
  SUCCESS = 'success',
  FAILURE = 'failure',
  PENDING = 'pending'
}

interface INotification{
  send(message: string): Promise<Sent>;
}
