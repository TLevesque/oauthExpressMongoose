export class Topic {
  _id: String;
  topic: String;
  votes: Number;
  date: Date;

  static parse(data) {
    let topic = Object.assign(new Topic(), data);
    return topic;
  }
}
