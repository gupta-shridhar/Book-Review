class InputObjects::BookAttributes < InputObjects::BaseInputObject
  argument :title, String, required: true
  argument :author, String, required: true
  argument :review, String, required: true
  argument :reviewer, String, required: true
end
