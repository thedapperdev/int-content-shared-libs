Feature: Large Content Card

@desktop
Scenario: Shows Large Card Component In Browser

  Given I open the shared components page to view a large card
  And the large image url is "//via.placeholder.com/900x350"
  And the alt text is "lorem ipsum dolor sit amet"
  And the title text is "We asked the Love Island narrator everything you want to know about the show"
  And the title link is "http://www.google.com"
  And the category url is "http://www.bbc.co.uk"
  And the category name is "Gossip" and the date is "17 minutes ago"

@mobile
Scenario: Shows Large Card Component In Mobile view
  Given the shared components page is open in mobile view, the small image url is "//via.placeholder.com/350x150"