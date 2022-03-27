# Intro

In this exercice, we're going to ask you to develop a cron job. The goal of this cron is to generate for each company (see list below) a Slack Message, that will be sent to all employees once a week. For each company, this weekly Slack message will announce to all employees the new jobs that have opened in their company in the last week.

Here is the [Slack formatting message](https://api.slack.com/reference/surfaces/formatting) documentation.

# Exercice 2

## Job to be done

- Generate 1 Slack message for each company.
- Customize the Slack message with the data retrieved from the Exercice 1 convenient. You can follow [this example](https://app.slack.com/block-kit-builder/TBBDTHC1M#%7B%22blocks%22:%5B%7B%22type%22:%22divider%22%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22Hi%20%7B%7B%20%F0%9F%91%8B%20This%20is%20your%20weekly%20update%20on%20new%20position%20openings%20at%20:backkmarket:%5Cn@here%20are%20last%20week's%20openings:%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22*Asia*%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22%3E%3E%3E*%3Chttps://love.hellotrusty.io/offer/6091ee2c19a78c00045b5b2d%7C%E6%97%A5%E6%9C%AC%E3%82%B5%E3%83%97%E3%83%A9%E3%82%A4%E8%B2%AC%E4%BB%BB%E8%80%85%20/%20Head%20of%20Japan%20Supply%3E*%20%5Cn%60%F0%9F%93%8DAsia%60%20%7C%20%60Tokyo%60%20%7C%20%60Full%20time%20position%60%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22*Marketing*%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22%3E%3E%3E*%3Chttps://love.hellotrusty.io/offer/60933fabab7e9a000448df9b%7CCRM%20Intern%3E*%20%5Cn%60%F0%9F%93%8DMarketing%60%20%7C%20%60Paris%60%20%7C%20%60Internship%60%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22%3E%3E%3E*%3Chttps://love.hellotrusty.io/offer/6094912e0dc17500046c5126%7CSEO%20Project%20Manager%20UK%3E*%20%5Cn%60%F0%9F%93%8DMarketing%60%20%7C%20%60Berlin%60%20%7C%20%60Full%20time%20position%60%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22%3E%3E%3E*%3Chttps://love.hellotrusty.io/offer/6094912e0dc17500046c5127%7CSEO%20Project%20Manager%20UK%3E*%20%5Cn%60%F0%9F%93%8DMarketing%60%20%7C%20%60Paris%60%20%7C%20%60Full%20time%20position%60%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22%3E%3E%3E*%3Chttps://love.hellotrusty.io/offer/6095e2aca7a9980004b130a1%7CTracking%20&%20Analytics%20Specialist%3E*%20%5Cn%60%F0%9F%93%8DMarketing%60%20%7C%20%60Bordeaux%60%20%7C%20%60Full%20time%20position%60%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22%3E%3E%3E*%3Chttps://love.hellotrusty.io/offer/6095e2aca7a9980004b130a2%7CTracking%20&%20Analytics%20Specialist%3E*%20%5Cn%60%F0%9F%93%8DMarketing%60%20%7C%20%60Berlin%60%20%7C%20%60Full%20time%20position%60%22%7D%7D%5D%7D) for the format of the slack message but creativity is a quality really appreciate for new Trusteam comers!

## Enter

Here is the list of companies: `["Swile","Backmarket","Ledger"]`

## Result

The list of your messages will be stored in a JSON. Check `expected_output.json` to get an id
