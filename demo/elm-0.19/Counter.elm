module Main exposing (..)

import Browser
import Html exposing (Html, button, div, text)
import Html.Attributes exposing (style, class)
import Html.Events exposing (onClick)


-- MAIN

main =
  Browser.sandbox { init = init, update = update, view = view }


-- MODEL

type alias Model = Int

init : Model
init = 0


-- UPDATE

type Msg = Increment | Decrement | Reset

update : Msg -> Model -> Model
update msg model =
  case msg of
    Increment -> model + 1
    Decrement -> model - 1
    Reset -> 0


-- VIEW

view : Model -> Html Msg
view model =
  div [ style "padding-top" "100px" ]
    [ button [ onClick Decrement ] [ text "Decrement" ]
    , div [] [ text (String.fromInt model) ]
    , button [ onClick Increment ] [ text "Increment" ]
    , div [] []
    , button [ onClick Reset ] [ text "Reset" ]
    ]